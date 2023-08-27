import React, { createContext, ReactNode, useEffect, useState } from 'react'

import { KEYS, KEYS_TRIGGERING_KEYBOARD_NAVIGATION } from '../keycodes'

// A React hook based on: https://github.com/WICG/focus-visible

const pointerMoveEventList = [
  'mousedown',
  'mouseup',
  'pointermove',
  'pointerdown',
  'pointerup',
  'touchmove',
  'touchstart',
  'touchend',
]

const pointerDownEventList = ['mousedown', 'pointerdown', 'touchstart']

export const FOCUS_VISIBLE_CSS_CLASS = 'focus-visible'

export type FocusVisibleProviderProps = {
  children: ReactNode
  // Provide a global css selector for legacy components.
  setGlobalClassName?: boolean
}

export const FocusVisibleContext = createContext(false)

export const FocusVisibleProvider = ({
  children,
  setGlobalClassName,
}: FocusVisibleProviderProps) => {
  // When the provider first loads, assume the user is in pointer modality.
  const [hadKeyboardEvent, setHadKeyboardEvent] = useState(false)

  if (setGlobalClassName) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      // Add a 'focus-visible' CSS class on the <body> element.
      document.body.classList.toggle(FOCUS_VISIBLE_CSS_CLASS, hadKeyboardEvent)
    }, [hadKeyboardEvent])
  }

  useEffect(() => {
    let lastClientX: Number
    let lastClientY: Number

    const onPointerDown = () => {
      setHadKeyboardEvent(false)
    }

    const onInitialPointerMove = () => {
      setHadKeyboardEvent(false)
    }

    const getLastMouseMove = (e: MouseEvent) => {
      // Ensure the mouse has actually moved (Safari)
      // https://transitory.technology/mouse-move-in-safari/
      if (lastClientX === e.clientX && lastClientY === e.clientY) {
        return
      }

      lastClientX = e.clientX
      lastClientY = e.clientY
    }

    const addInitialPointerMoveListeners = () => {
      document.addEventListener('mousemove', (event: MouseEvent) => {
        getLastMouseMove(event)
        // eslint-disable-next-line no-unused-expressions
        onInitialPointerMove
      })

      pointerMoveEventList.forEach(e => document.addEventListener(e, onInitialPointerMove))
    }

    const removeInitialPointerMoveListeners = () => {
      document.removeEventListener('mousemove', (event: MouseEvent) => {
        getLastMouseMove(event)
        // eslint-disable-next-line no-unused-expressions
        onInitialPointerMove
      })

      pointerMoveEventList.forEach(e => document.removeEventListener(e, onInitialPointerMove))
    }

    const onKeyDown = (e: KeyboardEvent) => {
      const element = e.target as HTMLInputElement
      const isTypingArea =
        element.tagName === 'TEXTAREA' || (element.tagName === 'INPUT' && element.type === 'text')
      // Remove Spacebar and Enter keys in case of text editing
      const keysList = isTypingArea
        ? KEYS_TRIGGERING_KEYBOARD_NAVIGATION.filter(
            key => key !== KEYS.SPACEBAR && key !== KEYS.ENTER,
          )
        : KEYS_TRIGGERING_KEYBOARD_NAVIGATION

      if (keysList.includes(e.key)) {
        setHadKeyboardEvent(true)
      }
    }

    // For some kinds of state, we are interested in changes at the global
    // scope only. Global pointer input and global key presses change
    // should affect the state at every scope.
    document.addEventListener('keydown', onKeyDown, true)
    pointerDownEventList.forEach(e => document.addEventListener(e, onPointerDown, true))
    addInitialPointerMoveListeners()

    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
      pointerDownEventList.forEach(e => document.removeEventListener(e, onPointerDown, true))
      removeInitialPointerMoveListeners()
    }
  }, [])

  return (
    <FocusVisibleContext.Provider value={hadKeyboardEvent}>{children}</FocusVisibleContext.Provider>
  )
}
