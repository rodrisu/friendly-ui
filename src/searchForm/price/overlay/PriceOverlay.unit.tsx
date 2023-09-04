import React from 'react'
import { shallow } from 'enzyme'

import { Item } from '../../../_internals/item'
import { StandardSeatIcon as StandardSeat } from '../../../icon/standardSeat'
import { Price, PriceDisplay } from '../../../price'
import { PriceOverlay } from './PriceOverlay'

describe('PriceOverlay', () => {
  it('should have a Item with a title and a seat icon', () => {
    const wrapper = shallow(<PriceOverlay itemTitle="1 seat" closeOnBlur={() => {}} />)
    expect(wrapper.find(Item).prop('leftTitle')).toEqual('1 seat')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(<StandardSeat />)
  })

  it('should have a Price in large display', () => {
    const wrapper = shallow(<PriceOverlay itemTitle="1 seat" closeOnBlur={() => {}} />)
    expect(wrapper.find(Price).prop('display')).toEqual(PriceDisplay.LARGE)
    expect(wrapper.find(Price).prop('focus')).toBe(true)
  })

  it('should not have the same title and itemTitle for a11y', () => {
    const wrapper = shallow(
      <PriceOverlay
        itemTitle="1 seat"
        title="Choose your number of seats"
        closeOnBlur={() => {}}
      />,
    )
    expect(wrapper.find(Price).prop('title')).toEqual('Choose your number of seats')
  })
})
