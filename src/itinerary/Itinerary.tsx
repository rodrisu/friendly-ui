import React, { cloneElement } from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { NormalizeProps } from '../layout/layoutNormalizer'
import { Addon } from './Addon'
import { Address } from './Address'
import { Connection } from './Connection'
import { HiddenStop } from './HiddenStop'
import { HiddenStops } from './HiddenStops'
import { StyledItinerary } from './Itinerary.style'
import { Lines } from './Lines'

export type ItineraryProps = A11yProps &
  NormalizeProps &
  Readonly<{
    children: Array<JSX.Element>
    small?: boolean
  }>

// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
const AddonType = (<Addon label="" />).type
const ConnectionType = (<Connection label="" />).type
const HiddenStopsType = (
  <HiddenStops label="">
    <HiddenStop label="" />
    <HiddenStop label="" />
  </HiddenStops>
).type
const AddressType = (<Address label="" />).type

// Magic to avoid having to define lines manually
const createChildrenWithLines = (
  child: JSX.Element,
  index: number,
  children: Array<JSX.Element>,
): JSX.Element => {
  let prevLine = Lines.NONE
  let nextLine = Lines.NONE

  if (child.type === AddonType) {
    if (index === 0) {
      nextLine = Lines.INACTIVE
    }
    if (index === children.length - 1) {
      prevLine = Lines.INACTIVE
    }
  }

  if (child.type === ConnectionType) {
    prevLine = Lines.CONNECTION
    nextLine = Lines.CONNECTION
  }

  if (child.type === HiddenStopsType) {
    prevLine = Lines.HIDDEN_STOPS
    nextLine = Lines.HIDDEN_STOPS
  }

  // Prev line for Address
  if (child.type === AddressType && index > 0) {
    // eslint-disable-next-line default-case
    switch (children[index - 1].type) {
      case AddonType:
        prevLine = Lines.INACTIVE
        break
      case AddressType:
      case HiddenStopsType:
        prevLine = Lines.ACTIVE
        break
      case ConnectionType:
        prevLine = Lines.CONNECTION
        break
    }
  }

  // Next line for Address
  if (child.type === AddressType && index + 1 < children.length) {
    // eslint-disable-next-line default-case
    switch (children[index + 1].type) {
      case AddonType:
        nextLine = Lines.INACTIVE
        break
      case AddressType:
      case HiddenStopsType:
        nextLine = Lines.ACTIVE
        break
      case ConnectionType:
        nextLine = Lines.CONNECTION
        break
    }
  }

  return cloneElement(child, {
    ...child.props,
    nextLine: child.props.nextLine ?? nextLine,
    prevLine: child.props.prevLine ?? prevLine,
  })
}

export const Itinerary = ({ children, small = false, ...props }: ItineraryProps) => {
  const childs = Array.isArray(children) ? children.filter(Boolean) : [children]

  return (
    <StyledItinerary small={small} {...pickA11yProps(props)}>
      {childs.map(createChildrenWithLines)}
    </StyledItinerary>
  )
}
