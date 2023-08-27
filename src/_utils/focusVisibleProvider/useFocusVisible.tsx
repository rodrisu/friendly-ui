import { useCallback, useContext, useState } from 'react'

import { FocusVisibleContext } from '../focusVisibleProvider'

export const useFocusVisible = () => {
  const [isFocused, setIsFocused] = useState(false)
  const hadKeyboardEvent = useContext(FocusVisibleContext)

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return {
    focusVisible: hadKeyboardEvent && isFocused,
    onFocus,
    onBlur,
  }
}
