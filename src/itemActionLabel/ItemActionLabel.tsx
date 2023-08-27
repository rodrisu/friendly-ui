import React from 'react'
import cc from 'classcat'

import { Item } from '../_internals/item'
import { color } from '../_utils/branding'
import { useFocusVisible } from '../_utils/focusVisibleProvider/useFocusVisible'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'

export type ItemActionLabelProps = NormalizeProps &
  A11yProps &
  Readonly<{
    labelTitle: string | JSX.Element
    action: string
    className?: string
    leftAddon?: React.ReactNode
    subLabel?: string
    href?: string | JSX.Element
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
  }>

export const ItemActionLabel = (props: ItemActionLabelProps) => {
  const {
    className,
    labelTitle,
    subLabel,
    action,
    leftAddon,
    href,
    onClick,
    onMouseDown,
    hasHorizontalSpacing = false,
  } = props
  const a11yAttrs = pickA11yProps<ItemActionLabelProps>(props)
  const { focusVisible, onFocus, onBlur } = useFocusVisible()
  return (
    <Item
      className={cc([
        {
          'focus-visible': focusVisible,
        },
        className,
      ])}
      leftAddon={leftAddon}
      leftTitle={labelTitle}
      leftBody={subLabel}
      rightBody={action}
      rightBodyColor={color.blue}
      href={href}
      tag={!href ? <button type="button" /> : undefined}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      isClickable
      isWrappable
      hasHorizontalSpacing={hasHorizontalSpacing}
      {...a11yAttrs}
    />
  )
}
