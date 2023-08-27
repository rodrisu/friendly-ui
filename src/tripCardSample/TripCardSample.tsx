import React from 'react'

import { Place } from '../_utils/place'
import { Address, Itinerary } from '../itinerary'
import {
  StyledPriceBlock,
  StyledPriceTextBody,
  StyledPriceTextSubHeaderStrong,
  StyledTripCardSample,
} from './TripCardSample.style'

export type TripCardSampleProps = Readonly<{
  departure: string
  arrival: string
  price?: string
  priceLabel?: string
}>

export const TripCardSample = (props: TripCardSampleProps) => {
  const { departure, arrival, price, priceLabel } = props

  const departurePlace: Place = { mainLabel: departure }
  const arrivalPlace: Place = { mainLabel: arrival }

  return (
    <StyledTripCardSample>
      <Itinerary>
        <Address label={departurePlace.mainLabel} />
        <Address label={arrivalPlace.mainLabel} />
      </Itinerary>
      {price && (
        <StyledPriceBlock>
          {priceLabel && <StyledPriceTextBody>{priceLabel}</StyledPriceTextBody>}
          <StyledPriceTextSubHeaderStrong>{price}</StyledPriceTextSubHeaderStrong>
        </StyledPriceBlock>
      )}
    </StyledTripCardSample>
  )
}
