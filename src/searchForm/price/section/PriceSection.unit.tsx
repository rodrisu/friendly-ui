import React from 'react'
import { shallow } from 'enzyme'

import { Item } from '../../../_internals/item'
import { Button } from '../../../button'
import { ChevronIcon, ChevronIconDirections } from '../../../icon/chevronIcon'
import { Price, PriceDisplay } from '../../../price'
import { PriceSection } from './PriceSection'

describe('PriceSection', () => {
  it('should have a clickable Item with a title and chevron icon', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <PriceSection itemTitle="1 seat" onClose={onClick} confirmLabel="Submit" />,
    )
    expect(wrapper.find(Item).prop('leftTitle')).toEqual('1 seat')
    expect(wrapper.find(Item).prop('leftAddon')).toEqual(
      <ChevronIcon direction={ChevronIconDirections.LEFT} />,
    )
    expect(wrapper.find(Item).prop('tag')).toEqual(<button type="button" />)
    expect(wrapper.find(Button).prop('children')).toEqual('Submit')
    wrapper.find(Item).simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('should have a Price with display large', () => {
    const wrapper = shallow(
      <PriceSection itemTitle="1 seat" confirmLabel="Submit" onClose={() => {}} />,
    )
    expect(wrapper.find(Price).prop('display')).toEqual(PriceDisplay.LARGE)
  })

  it('should not have the same title and itemTitle for a11y', () => {
    const wrapper = shallow(
      <PriceSection itemTitle="1 seat" title="Choose your number of seats" onClose={() => {}} />,
    )
    expect(wrapper.find(Price).prop('title')).toEqual('Choose your number of seats')
  })
})
