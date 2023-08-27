import React, { PureComponent } from 'react'
import cc from 'classcat'

import { Item, ItemStatus } from '../_internals/item'
import { prefix } from '../_utils'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { Loader } from '../loader/Loader'

export const ItemActionStatus = ItemStatus

export type ItemActionProps = NormalizeProps &
  A11yProps &
  Readonly<{
    action: string
    subLabel?: string
    highlighted?: boolean
    tag?: JSX.Element
    className?: string
    href?: string | JSX.Element
    status?: ItemStatus
    leftAddon?: React.ReactNode
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
    onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
    onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
    onDoneAnimationEnd?: () => void
    hideHoverBackground?: boolean
  }>

export class ItemAction extends PureComponent<ItemActionProps> {
  static defaultProps: Partial<ItemActionProps> = {
    highlighted: true,
    status: ItemStatus.DEFAULT,
    // eslint-disable-next-line react/button-has-type
    tag: <button />,
  }

  static STATUS = ItemStatus

  render() {
    const {
      highlighted,
      className,
      action,
      subLabel,
      leftAddon,
      tag,
      href,
      status,
      onClick,
      onBlur,
      onFocus,
      onMouseDown,
      onDoneAnimationEnd,
      hideHoverBackground = false,
      hasHorizontalSpacing = false,
    } = this.props
    const a11yAttrs = pickA11yProps<ItemActionProps>(this.props)

    let rightAddon

    if (status === ItemStatus.LOADING) {
      rightAddon = (
        <Loader
          className={cc(prefix({ chevron: true }))}
          size={24}
          onDoneAnimationEnd={onDoneAnimationEnd}
          inline
        />
      )
    }
    if (status === ItemStatus.CHECKED) {
      rightAddon = (
        <Loader
          className={cc(prefix({ chevron: true }))}
          size={24}
          onDoneAnimationEnd={onDoneAnimationEnd}
          done
          inline
        />
      )
    }

    return (
      <Item
        highlighted={highlighted}
        className={className}
        leftAddon={leftAddon}
        leftTitle={action}
        leftBody={subLabel}
        rightAddon={rightAddon}
        href={href}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        onMouseDown={onMouseDown}
        tag={tag}
        isClickable
        hideHoverBackground={hideHoverBackground}
        hasHorizontalSpacing={hasHorizontalSpacing}
        {...a11yAttrs}
      />
    )
  }
}
