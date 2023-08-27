import React from 'react'

import { WarningIcon } from '../icon/warningIcon'
import { Address, Itinerary } from '../itinerary'
import { TripCard } from '.'
import { TripCardProps } from './TripCard'

// Needs to be outside of the .mdx file, cause the parser changes object types
// and mess with the itinerary display
const itinerary = (
  <Itinerary>
    <Address label="Paris" subLabel="Porte de Vincennes" time="09:00" />
    <Address label="Bordeaux" subLabel="Gare Bordeaux Saint-Jean" time="12:00" />
  </Itinerary>
)

const defaultProps: TripCardProps = {
  'aria-label': 'Pick-up point: Paris, Drop-off point: Bordeaux, Departure time: 09:00, warning',
  href: '/',
  itinerary,
  price: '8,00 €',
  statusInformation: {
    icon: <WarningIcon />,
    text: 'Warning',
    highlighted: false,
  },
  mainTitle: 'Sun march 8th, 18:00',
}

const driverProps: Partial<TripCardProps> = {
  driver: {
    avatarUrl: '//placehold.it/500x500',
    firstName: 'Jane',
    rating: '4.9',
    isIdChecked: true,
  },
  flags: {
    ladiesOnly: true,
    aloneInTheBack: true,
    maxTwo: true,
    autoApproval: true,
  },
  titles: {
    ladiesOnly: 'Ladies Only',
    aloneInTheBack: 'Alone in the back',
    maxTwo: 'Max 2 in the back',
    autoApproval: 'Auto approval',
  },
}

const passengerProps = {
  passengers: [
    {
      avatarUrl: '//placehold.it/500x500',
      firstName: 'First name',
      rating: '4.1',
    },
    {
      avatarUrl: '//placehold.it/500x500',
      firstName: 'First name',
      rating: '4.1',
    },
    {
      avatarUrl: '//placehold.it/500x500',
      firstName: 'First name',
      rating: '4.1',
    },
    {
      avatarUrl: '//placehold.it/500x500',
      firstName: 'First name',
      rating: '4.1',
    },
  ],
}

export const TripCardCarpoolExample = () => {
  const props: TripCardProps = {
    ...defaultProps,
    ...driverProps,
  }
  return <TripCard {...props} />
}

export const TripCardPassengersExample = () => {
  const props: TripCardProps = {
    ...defaultProps,
    ...passengerProps,
  }
  return <TripCard {...props} />
}

export const TripCardCarpoolTagExample = () => {
  const props: TripCardProps = {
    ...defaultProps,
    ...driverProps,
    tag: '10% discount',
    statusInformation: null,
    originalPrice: {
      value: '10,00 €',
      label: 'Original price:',
    },
  }
  return <TripCard {...props} />
}
