import React from 'react'
import { mount, shallow } from 'enzyme'

import { Button } from '../button'
import { MinusIcon } from '../icon/minusIcon'
import { PlusIcon } from '../icon/plusIcon'
import { Address, Itinerary } from '../itinerary'
import { StepperDisplay } from './constants'
import { Stepper } from './Stepper'

const defaultProps = {
  name: 'testName',
  increaseLabel: 'Increase',
  decreaseLabel: 'Decrease',
}

describe('Stepper', () => {
  it('Should have classNames', () => {
    const stepper = shallow(
      <Stepper
        increaseLabel="Plus"
        decreaseLabel="Minus"
        className="customClassName"
        valueClassName="valueClassName"
      />,
    )
    expect(stepper.hasClass('kirk-stepper')).toBe(true)
    expect(stepper.hasClass('customClassName')).toBe(true)
    expect(stepper.find('.kirk-stepper-value').hasClass('valueClassName')).toBe(true)
  })

  it('Should have the default text & attributes', () => {
    const stepper = mount(
      <Stepper
        name="test"
        increaseLabel="Plus"
        decreaseLabel="Minus"
        title="Choose the number of passengers"
      />,
    )

    expect(stepper.find('.kirk-stepper-content').prop('aria-label')).toEqual(
      'Choose the number of passengers',
    )
    expect(stepper.find(Button).at(0).prop('aria-label')).toBe('Minus')
    expect(stepper.find(Button).at(1).prop('aria-label')).toBe('Plus')

    expect(stepper.prop('min')).toBe(Number.MIN_SAFE_INTEGER)
    expect(stepper.prop('max')).toBe(Number.MAX_SAFE_INTEGER)
    expect(stepper.prop('step')).toBe(1)
    expect(stepper.prop('name')).toBe('test')
  })

  it('Should be able to increment/decrement the value', () => {
    const onChange = jest.fn()
    const stepper = shallow(
      <Stepper {...defaultProps} value={3} step={3} min={2} max={10} onChange={onChange} />,
    )
    expect(stepper.state('value')).toBe(3)
    stepper.find('.kirk-stepper-increment').simulate('click')
    expect(stepper.state('value')).toBe(6)
    expect(onChange).toHaveBeenCalledWith({ name: 'testName', value: 6 })
    stepper.find('.kirk-stepper-decrement').simulate('click')
    expect(stepper.state('value')).toBe(3)
    expect(onChange).toHaveBeenCalledWith({ name: 'testName', value: 3 })
  })

  it('Should be able to have a max value', () => {
    const stepper = shallow(<Stepper {...defaultProps} value={8} step={3} max={10} />)
    stepper.find('.kirk-stepper-increment').simulate('click')
    expect(stepper.state('value')).toBe(10)
  })

  it('Should be able to have a min value', () => {
    const stepper = shallow(<Stepper {...defaultProps} value={5} step={3} min={3} />)
    stepper.find('.kirk-stepper-decrement').simulate('click')
    expect(stepper.state('value')).toBe(3)
  })

  it('Should have the right max value instead of wrong settings', () => {
    const stepper = shallow(<Stepper {...defaultProps} value={10} min={2} max={5} />)
    expect(stepper.state('value')).toBe(5)
  })

  it('Should have the right min value instead of wrong settings', () => {
    const stepper = shallow(<Stepper {...defaultProps} value={-10} min={2} max={5} />)
    expect(stepper.state('value')).toBe(2)
  })

  it('Be able to format the value', () => {
    const stepper = mount(<Stepper {...defaultProps} value={2} format={value => `${value} €`} />)
    expect(stepper.find('.kirk-stepper-value').prop('children')).toBe('2 €')
  })

  it('Should be able to receive props and then update the value', () => {
    const stepper = mount(<Stepper {...defaultProps} value={4} min={0} max={10} />)

    // Only change the max value
    stepper.setProps({ max: 3 })
    expect(stepper.state('value')).toBe(3)

    // Only change the min value
    stepper.setProps({ min: 5 })
    expect(stepper.state('value')).toBe(5)

    // Set state value higher than the max value
    stepper.setProps({ max: 4, min: 1, value: 5 })
    expect(stepper.prop('min')).toBe(1)
    expect(stepper.prop('max')).toBe(4)
    expect(stepper.state('value')).toBe(4)

    // Set state value lower than the min value
    stepper.setProps({ min: 4, max: 8, value: 0 })
    expect(stepper.prop('min')).toBe(4)
    expect(stepper.prop('max')).toBe(8)
    expect(stepper.state('value')).toBe(4)
  })

  it('Should be able to keep the right value after props change', () => {
    const stepper = shallow(<Stepper {...defaultProps} value={5} step={3} min={1} />)
    stepper.find('.kirk-stepper-increment').simulate('click')
    stepper.setProps({ min: 2 })
    expect(stepper.state('value')).toBe(8)
  })

  it('Should not call onChange on componentDidMount', () => {
    const onChange = jest.fn()
    shallow(<Stepper {...defaultProps} min={1} value={2} step={3} max={5} onChange={onChange} />)
    expect(onChange).toHaveBeenCalledTimes(0)
  })

  it('Should disable buttons if disabled is true', () => {
    const stepper = shallow(<Stepper {...defaultProps} value={5} min={1} max={10} />)
    expect(stepper.find(Button).at(0).prop('disabled')).toBeFalsy()
    expect(stepper.find(Button).at(1).prop('disabled')).toBeFalsy()
    expect(stepper.find(MinusIcon).prop('isDisabled')).toBeFalsy()
    expect(stepper.find(PlusIcon).prop('isDisabled')).toBeFalsy()

    stepper.setProps({ disabled: true })
    expect(stepper.find(Button).at(0).prop('disabled')).toBeTruthy()
    expect(stepper.find(Button).at(1).prop('disabled')).toBeTruthy()
    expect(stepper.find(MinusIcon).prop('isDisabled')).toBeTruthy()
    expect(stepper.find(PlusIcon).prop('isDisabled')).toBeTruthy()
  })

  describe('display', () => {
    it('should render SMALL display', () => {
      const stepper = shallow(<Stepper {...defaultProps} display={StepperDisplay.SMALL} />)
      expect(stepper.find(MinusIcon).prop('size')).toBe(24)
      expect(stepper.find(PlusIcon).prop('size')).toBe(24)
      expect(stepper.find('.kirk-stepper-small').exists()).toBe(true)
    })

    it('should render LARGE display', () => {
      const stepper = shallow(<Stepper {...defaultProps} display={StepperDisplay.LARGE} />)
      expect(stepper.find(MinusIcon).prop('size')).toBe(48)
      expect(stepper.find(PlusIcon).prop('size')).toBe(48)
      expect(stepper.find('.kirk-stepper-large').exists()).toBe(true)
    })
  })

  describe('handleFontSize', () => {
    it('should call handleFontSize() on componentDidUpdate()', () => {
      const stepper = shallow(<Stepper {...defaultProps} />)
      const spyHandleFontSize = jest.spyOn(Stepper.prototype, 'handleFontSize')

      spyHandleFontSize.mockClear()
      stepper.setProps({ value: 10 })
      expect(spyHandleFontSize).toHaveBeenCalled()
    })

    it('should call handleFontSize() on window.resize()', () => {
      shallow(<Stepper {...defaultProps} />)
      const spyHandleFontSize = jest.spyOn(Stepper.prototype, 'handleFontSize')

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
      const stepper = shallow(<Stepper {...defaultProps} display={StepperDisplay.SMALL} />)
      expect(stepper.find('.kirk-stepper-left-addon').exists()).toBe(false)
      expect(stepper.find(Itinerary).exists()).toBe(false)
    })

    it('should not render leftAddon on large display', () => {
      const stepper = shallow(
        <Stepper {...defaultProps} display={StepperDisplay.LARGE} leftAddon={itinerary} />,
      )
      expect(stepper.find('.kirk-stepper-left-addon').exists()).toBe(false)
      expect(stepper.find(Itinerary).exists()).toBe(false)
    })

    it('should render leftAddon on small display', () => {
      const stepper = shallow(
        <Stepper {...defaultProps} display={StepperDisplay.SMALL} leftAddon={itinerary} />,
      )
      expect(stepper.find(Itinerary).exists()).toBe(true)
    })
  })
})
