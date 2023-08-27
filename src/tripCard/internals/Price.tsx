import React from 'react'

import { TripCardProps } from '../TripCard'
import { StyledOriginalPrice, StyledPrice } from '../TripCard.style'

export type PriceProps = Readonly<{
  price: TripCardProps['price']
  originalPrice?: TripCardProps['originalPrice']
}>

export const Price = ({ price, originalPrice }: PriceProps): JSX.Element => {
  if (originalPrice) {
    return (
      <div>
        <StyledPrice $hasDiscount>{price}</StyledPrice>
        <StyledOriginalPrice aria-label={originalPrice.label}>
          {originalPrice.value}
        </StyledOriginalPrice>
      </div>
    )
  }
  return <StyledPrice>{price}</StyledPrice>
}
