import React from 'react'

import { Item } from '../_internals/item'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { Button } from '../button/Button'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { TextDisplayType } from '../text'

export type ItemDataProps = NormalizeProps &
  A11yProps &
  Readonly<{
    mainTitle: string
    mainInfo?: React.ReactNode
    data?: string | JSX.Element
    dataColor?: string
    dataIcon?: JSX.Element
    dataInfo?: string
    dataStrikeThroughLabel?: string
    dataInfoStrikeThroughLabel?: string
    className?: string
    mainTitleButtonAddon?: React.ReactElement<Button>
    tag?: JSX.Element
    disabled?: boolean
    tagLabel?: string
  }>

export const ItemData = (props: ItemDataProps) => {
  const {
    mainInfo,
    data,
    dataColor,
    dataIcon,
    dataStrikeThroughLabel,
    dataInfoStrikeThroughLabel,
    className,
    mainTitle,
    mainTitleButtonAddon,
    dataInfo,
    tag,
    disabled,
    hasHorizontalSpacing = false,
    tagLabel = '',
  } = props
  const a11yAttrs = pickA11yProps<ItemDataProps>(props)
  return (
    <Item
      className={className}
      leftTitle={mainTitle}
      leftTitleButtonAddon={mainTitleButtonAddon}
      leftBody={mainInfo}
      rightTitle={data}
      rightTitleColor={dataColor}
      rightTitleStrikeThrough={Boolean(dataStrikeThroughLabel)}
      rightTitleAriaProps={{
        'aria-label': dataStrikeThroughLabel,
      }}
      rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
      rightTitleAddon={dataIcon}
      rightBody={dataInfo}
      rightBodyStrikeThrough={Boolean(dataInfoStrikeThroughLabel)}
      rightBodyAriaProps={{
        'aria-label': dataInfoStrikeThroughLabel,
      }}
      tag={tag}
      disabled={disabled}
      hasHorizontalSpacing={hasHorizontalSpacing}
      tagLabel={tagLabel}
      {...a11yAttrs}
    />
  )
}
