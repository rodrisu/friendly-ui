import React from 'react'

import { fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import createFocusTrap, { FocusTrap } from 'focus-trap'

import { useFocusTrap } from './index'

const createFocusTrapMock = createFocusTrap as jest.Mock

describe('useFocusTrap', () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ref: React.MutableRefObject<HTMLElement> = { current: null! }

  beforeEach(() => {
    ref.current = document.createElement('div')
  })

  afterEach(() => {
    createFocusTrapMock.mockClear()
  })

  it('Should activate focus trap', () => {
    renderHook(() => useFocusTrap(ref, jest.fn()))
    expect(createFocusTrapMock).toHaveBeenCalledTimes(1)
    expect(createFocusTrapMock).toHaveBeenCalledWith(ref.current)
    const trap: FocusTrap = createFocusTrapMock.mock.results[0].value
    expect(trap.activate).toHaveBeenCalledTimes(1)
    expect(trap.activate).toHaveBeenCalledWith()
  })

  it('Should call onClose when pressing ESC key focus trap', () => {
    const onClose = jest.fn()
    renderHook(() => useFocusTrap(ref, onClose))
    fireEvent.keyDown(ref.current, { code: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })

  it('Should deactivate focus trap on unmount', () => {
    renderHook(() => useFocusTrap(ref, jest.fn())).unmount()
    expect(createFocusTrapMock).toHaveBeenCalledTimes(1)
    expect(createFocusTrapMock).toHaveBeenCalledWith(ref.current)
    const trap: FocusTrap = createFocusTrapMock.mock.results[0].value
    expect(trap.deactivate).toHaveBeenCalledTimes(1)
    expect(trap.deactivate).toHaveBeenCalledWith()
  })

  it('Should not deactivate/re-activate when onClose reference changes', () => {
    const { rerender } = renderHook<jest.Mock, void>(onClose => useFocusTrap(ref, onClose), {
      initialProps: jest.fn(),
    })

    rerender(jest.fn())

    expect(createFocusTrapMock).toHaveBeenCalledTimes(1)
    expect(createFocusTrapMock).toHaveBeenCalledWith(ref.current)
    const trap: FocusTrap = createFocusTrapMock.mock.results[0].value
    expect(trap.deactivate).not.toHaveBeenCalled()
  })

  it('Should set overflow hidden on html tag and reset it to visible when unmounting', () => {
    const { unmount } = renderHook(() => useFocusTrap(ref, jest.fn()))
    const htmlNode = document.querySelector('html')
    expect(htmlNode).toHaveStyle({ overflow: 'hidden' })
    unmount()
    expect(htmlNode).toHaveStyle({ overflow: 'visible' })
  })
})
