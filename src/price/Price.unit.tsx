import React from 'react'
import { mount, shallow } from 'enzyme'

import { Button } from '../button'
import { MinusIcon } from '../icon/minusIcon'
import { PlusIcon } from '../icon/plusIcon'
import { Address, Itinerary } from '../itinerary'
import { PriceDisplay } from './constants'
import { Price } from './Price'

const defaultProps = {
  name: 'testName',
  increaseLabel: 'Increase',
  decreaseLabel: 'Decrease',
}

describe('Price', () => {
  it('Should have classNames', () => {
    const price = shallow(
      <Price
        increaseLabel="Plus"
        decreaseLabel="Minus"
        className="customClassName"
        valueClassName="valueClassName"
      />,
    )
    expect(price.hasClass('kirk-price')).toBe(true)
    expect(price.hasClass('customClassName')).toBe(true)
    expect(price.find('.kirk-price-value').hasClass('valueClassName')).toBe(true)
  })

  it('Should have the default text & attributes', () => {
    const price = mount(
      <Price
        name="test"
        increaseLabel="Plus"
        decreaseLabel="Minus"
        title="Choose the number of passengers"
      />,
    )

    expect(price.find('.kirk-price-content').prop('aria-label')).toEqual(
      'Choose the number of passengers',
    )
    expect(price.find(Button).at(0).prop('aria-label')).toBe('Minus')
    expect(price.find(Button).at(1).prop('aria-label')).toBe('Plus')

    expect(price.prop('min')).toBe(Number.MIN_SAFE_INTEGER)
    expect(price.prop('max')).toBe(Number.MAX_SAFE_INTEGER)
    expect(price.prop('step')).toBe(1)
    expect(price.prop('name')).toBe('test')
  })

  it('Should be able to increment/decrement the value', () => {
    const onChange = jest.fn()
    const price = shallow(
      <Price {...defaultProps} value={3} step={3} min={2} max={10} onChange={onChange} />,
    )
    expect(price.state('value')).toBe(3)
    price.find('.kirk-price-increment').simulate('click')
    expect(price.state('value')).toBe(6)
    expect(onChange).toHaveBeenCalledWith({ name: 'testName', value: 6 })
    price.find('.kirk-price-decrement').simulate('click')
    expect(price.state('value')).toBe(3)
    expect(onChange).toHaveBeenCalledWith({ name: 'testName', value: 3 })
  })

  it('Should be able to have a max value', () => {
    const price = shallow(<Price {...defaultProps} value={8} step={3} max={10} />)
    price.find('.kirk-price-increment').simulate('click')
    expect(price.state('value')).toBe(10)
  })

  it('Should be able to have a min value', () => {
    const price = shallow(<Price {...defaultProps} value={5} step={3} min={3} />)
    price.find('.kirk-price-decrement').simulate('click')
    expect(price.state('value')).toBe(3)
  })

  it('Should have the right max value instead of wrong settings', () => {
    const price = shallow(<Price {...defaultProps} value={10} min={2} max={5} />)
    expect(price.state('value')).toBe(5)
  })

  it('Should have the right min value instead of wrong settings', () => {
    const price = shallow(<Price {...defaultProps} value={-10} min={2} max={5} />)
    expect(price.state('value')).toBe(2)
  })

  it('Be able to format the value', () => {
    const price = mount(<Price {...defaultProps} value={2} format={value => `${value} €`} />)
    expect(price.find('.kirk-price-value').prop('children')).toBe('2 €')
  })

  it('Should be able to receive props and then update the value', () => {
    const price = mount(<Price {...defaultProps} value={4} min={0} max={10} />)

    // Only change the max value
    price.setProps({ max: 3 })
    expect(price.state('value')).toBe(3)

    // Only change the min value
    price.setProps({ min: 5 })
    expect(price.state('value')).toBe(5)

    // Set state value higher than the max value
    price.setProps({ max: 4, min: 1, value: 5 })
    expect(price.prop('min')).toBe(1)
    expect(price.prop('max')).toBe(4)
    expect(price.state('value')).toBe(4)

    // Set state value lower than the min value
    price.setProps({ min: 4, max: 8, value: 0 })
    expect(price.prop('min')).toBe(4)
    expect(price.prop('max')).toBe(8)
    expect(price.state('value')).toBe(4)
  })

  it('Should be able to keep the right value after props change', () => {
    const price = shallow(<Price {...defaultProps} value={5} step={3} min={1} />)
    price.find('.kirk-price-increment').simulate('click')
    price.setProps({ min: 2 })
    expect(price.state('value')).toBe(8)
  })

  it('Should not call onChange on componentDidMount', () => {
    const onChange = jest.fn()
    shallow(<Price {...defaultProps} min={1} value={2} step={3} max={5} onChange={onChange} />)
    expect(onChange).toHaveBeenCalledTimes(0)
  })

  it('Should disable buttons if disabled is true', () => {
    const price = shallow(<Price {...defaultProps} value={5} min={1} max={10} />)
    expect(price.find(Button).at(0).prop('disabled')).toBeFalsy()
    expect(price.find(Button).at(1).prop('disabled')).toBeFalsy()
    expect(price.find(MinusIcon).prop('isDisabled')).toBeFalsy()
    expect(price.find(PlusIcon).prop('isDisabled')).toBeFalsy()

    price.setProps({ disabled: true })
    expect(price.find(Button).at(0).prop('disabled')).toBeTruthy()
    expect(price.find(Button).at(1).prop('disabled')).toBeTruthy()
    expect(price.find(MinusIcon).prop('isDisabled')).toBeTruthy()
    expect(price.find(PlusIcon).prop('isDisabled')).toBeTruthy()
  })

  describe('display', () => {
    it('should render SMALL display', () => {
      const price = shallow(<Price {...defaultProps} display={PriceDisplay.SMALL} />)
      expect(price.find(MinusIcon).prop('size')).toBe(24)
      expect(price.find(PlusIcon).prop('size')).toBe(24)
      expect(price.find('.kirk-price-small').exists()).toBe(true)
    })

    it('should render LARGE display', () => {
      const price = shallow(<Price {...defaultProps} display={PriceDisplay.LARGE} />)
      expect(price.find(MinusIcon).prop('size')).toBe(48)
      expect(price.find(PlusIcon).prop('size')).toBe(48)
      expect(price.find('.kirk-price-large').exists()).toBe(true)
    })
  })

  describe('handleFontSize', () => {
    it('should call handleFontSize() on componentDidUpdate()', () => {
      const price = shallow(<Price {...defaultProps} />)
      const spyHandleFontSize = jest.spyOn(Price.prototype, 'handleFontSize')

      spyHandleFontSize.mockClear()
      price.setProps({ value: 10 })
      expect(spyHandleFontSize).toHaveBeenCalled()
    })

    it('should call handleFontSize() on window.resize()', () => {
      shallow(<Price {...defaultProps} />)
      const spyHandleFontSize = jest.spyOn(Price.prototype, 'handleFontSize')

      spyHandleFontSize.mockClear()
      window.dispatchEvent(new Event('resize'))
      expect(spyHandleFontSize).toHaveBeenCalled()
    })
  })

  describe('leftAddon', () => {
    const itinerary = (
      <Itinerary>
        <Address label="Paris" />
        <Address label="Nantes" />
      </Itinerary>
    )

    it('should not render leftAddon if not provided', () => {
      const price = shallow(<Price {...defaultProps} display={PriceDisplay.SMALL} />)
      expect(price.find('.kirk-price-left-addon').exists()).toBe(false)
      expect(price.find(Itinerary).exists()).toBe(false)
    })

    it('should not render leftAddon on large display', () => {
      const price = shallow(
        <Price {...defaultProps} display={PriceDisplay.LARGE} leftAddon={itinerary} />,
      )
      expect(price.find('.kirk-price-left-addon').exists()).toBe(false)
      expect(price.find(Itinerary).exists()).toBe(false)
    })

    it('should render leftAddon on small display', () => {
      const price = shallow(
        <Price {...defaultProps} display={PriceDisplay.SMALL} leftAddon={itinerary} />,
      )
      expect(price.find(Itinerary).exists()).toBe(true)
    })
  })
})
