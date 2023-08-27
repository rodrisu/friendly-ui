import React, { ReactNode } from 'react'
import { ThemeProps } from 'styled-components'

import { replaceNewLineWithBR } from '../_utils'

export type TextProps = Readonly<{
  id?: string
  className?: string
  children: ReactNode
  itemProp?: string
  theme: ThemeProps<any>
}>

export const Text = ({ theme, ...props }: TextProps): JSX.Element => {
  const children =
    typeof props.children === 'string' ? replaceNewLineWithBR(props.children) : props.children
  return React.cloneElement(<span />, props, children)
}
