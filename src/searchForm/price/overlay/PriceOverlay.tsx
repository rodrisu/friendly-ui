import React from 'react'
import cc from 'classcat'

import { Item } from '../../../_internals/item'
import { ContentDivider } from '../../../divider/contentDivider'
import { CoinIcon } from '../../../icon/coinIcon'
import { Price, PriceDisplay, PriceProps } from '../../../price'

export type PriceOverlayProps = PriceProps &
  Readonly<{
    itemTitle: string
  }>

export const PriceOverlay = ({ itemTitle, className, ...props }: PriceOverlayProps) => (
  <div className={cc(['kirk-priceOverlay', className])}>
    <Item leftAddon={<CoinIcon />} leftTitle={itemTitle} />
    <ContentDivider />
    <Price
      {...props}
      className="kirk-priceOverlay-price"
      display={PriceDisplay.LARGE}
      focus
    />
  </div>
)
