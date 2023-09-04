import React, { PureComponent, RefObject } from 'react'
import cc from 'classcat'
import { canUseDOM } from 'exenv'
import isEmpty from 'lodash.isempty'

import { isTouchEventsAvailable } from '../_utils'
import { color, delay, font, pxToInteger, space } from '../_utils/branding'
import { OnChangeParameters } from '../_utils/onChange'
import { Button, ButtonStatus } from '../button'
import { MinusIcon } from '../icon/minusIcon'
import { PlusIcon } from '../icon/plusIcon'
import { Itinerary } from '../itinerary'
import { PriceButtonSize, PriceDisplay } from './constants'
import { StyledAddon, StyledPrice } from './Price.style'
import { TextField, inputTypes, inputModes } from '../textField/TextField'

const PriceValueSize = {
  [PriceDisplay.SMALL]: pxToInteger(font.l.size),
  [PriceDisplay.LARGE]: pxToInteger(font.xxl.size),
}

export type PriceProps = Readonly<{
  name: string
  increaseLabel: string
  decreaseLabel: string
  title: string
  className?: string
  valueClassName?: string
  value?: number
  step?: number
  max?: number
  min?: number
  threshold?: Readonly<{
    medium: number
    high: number
  }>
  format?: (value: string | number) => string | number
  onChange?: (obj: OnChangeParameters) => void
  display?: PriceDisplay
  focus?: boolean
  leftAddon?: JSX.Element
  disabled?: boolean
}>

type PriceState = {
  value: number
  fontSize?: number
  isInputActive: boolean;
}

// Support IE. Same value returned with Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
const defaultInteger = 2 ** 53 - 1
const isTouchScreen = isTouchEventsAvailable()

// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
// @ts-ignore
const ItineraryType = (<Itinerary />).type

export class Price extends PureComponent<PriceProps, PriceState> {
  private valueElementRef: RefObject<HTMLDivElement>
  private containerRef: RefObject<HTMLDivElement>

  static defaultProps: Partial<PriceProps> = {
    value: 0,
    step: 1,
    max: defaultInteger,
    min: -defaultInteger,
    format: value => value,
    onChange: () => { },
    display: PriceDisplay.SMALL,
    focus: false,
  }

  filterValue = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max))

  state: PriceState = {
    value: this.filterValue(this.props.value, this.props.min, this.props.max),
    isInputActive: false,
  }

  whileButtonDown: number
  buttonDownDelay: number

  constructor(props: PriceProps) {
    super(props)
    this.valueElementRef = React.createRef()
    this.containerRef = React.createRef()
  }

  componentDidMount() {
    this.handleFontSize()
    window.addEventListener('resize', this.handleFontSize.bind(this))
    if (this.containerRef.current && this.props.focus) {
      this.containerRef.current.focus()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleFontSize)
  }

  componentDidUpdate(prevProps: PriceProps) {
    if (prevProps.max !== this.props.max || prevProps.min !== this.props.min) {
      this.update(this.state.value)
    }
    if (prevProps.value !== this.props.value) {
      this.update(this.props.value)
    }
  }

  update(newValue: number) {
    const value = this.filterValue(newValue, this.props.min, this.props.max)
    this.setState({ value })
    this.props.onChange({ name: this.props.name, value })
    this.handleFontSize()
  }

  // Function to handle input value change
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (!isNaN(newValue)) {
      this.update(newValue);
    }
  };

  // Function to handle input focus
  handleInputFocus = () => {
    this.setState({ isInputActive: true });
  };

  // Function to handle input blur
  handleInputBlur = () => {
    this.setState({ isInputActive: false });
  };

  handleFontSize() {
    if (!this.valueElementRef.current || this.props.display === PriceDisplay.SMALL) {
      return
    }

    const { format, display } = this.props
    const { value } = this.state

    // Compute available space without paddings
    const availableSpace = this.valueElementRef.current.offsetWidth - pxToInteger(space.l) * 2
    const valueLength = String(format(value)).length
    const optimalSize = Math.trunc(availableSpace / (valueLength * 0.5))
    const maxSize = PriceValueSize[display]

    this.setState({ fontSize: Math.min(optimalSize, maxSize) })
  }

  handleButtonDown = (callback: () => void) => () => {
    if (canUseDOM) {
      this.buttonDownDelay = window.setTimeout(() => {
        this.whileButtonDown = window.setInterval(() => {
          callback()
          if (this.state.value >= this.props.max || this.state.value <= this.props.min) {
            this.clearButtonPressedTimers()
          }
        }, parseInt(delay.interval.base, 10))
      }, parseInt(delay.timeout.base, 10))
    }
  }

  clearButtonPressedTimers = () => {
    clearTimeout(this.buttonDownDelay)
    clearInterval(this.whileButtonDown)
  }

  handleButtonUp = (callback: () => void) => () => {
    callback()
    this.clearButtonPressedTimers()
  }

  increment = () => {
    const newValue = this.state.value + this.props.step
    this.update(newValue)
    if (this.containerRef.current && newValue >= this.props.max) {
      this.containerRef.current.focus()
    }
  }

  decrement = () => {
    const newValue = this.state.value - this.props.step
    this.update(newValue)
    if (this.containerRef.current && newValue <= this.props.min) {
      this.containerRef.current.focus()
    }
  }

  setMinimum = () => {
    this.update(this.props.min)
  }

  setMaximum = () => {
    this.update(this.props.max)
  }

  getValueColor = () => {
    const { threshold, max } = this.props

    if (!threshold) {
      return color.midnightGreen
    }

    const { medium, high } = threshold
    const { value } = this.state

    if (value === max || value > high) {
      return color.red
    }
    if (value > medium) {
      return color.orange
    }

    return color.green
  }

  createButtonListeners(callback: () => void) {
    return isTouchScreen
      ? { onTouchStart: this.handleButtonDown(callback), onTouchEnd: this.handleButtonUp(callback) }
      : {
        onMouseDown: this.handleButtonDown(callback),
        // Use onClick and not mouseDown so that the event is triggered
        // even when pressing ENTER and SPACEBAR
        onClick: this.handleButtonUp(callback),
      }
  }

  render(): JSX.Element {
    const {
      className,
      leftAddon,
      title,
      increaseLabel,
      decreaseLabel,
      format,
      min,
      max,
      valueClassName,
      display,
      disabled,
    } = this.props

    const isMax = this.state.value >= max
    const isMin = this.state.value <= min
    const buttonSize = PriceButtonSize[display]
    const hasLeftAddon = display === PriceDisplay.SMALL && !isEmpty(leftAddon)
    const isLeftAddonItinerary = hasLeftAddon && leftAddon.type === ItineraryType

    return (
      <StyledPrice
        valueColor={this.getValueColor()}
        className={cc(['kirk-price', `kirk-price-${display}`, className])}
      >
        {hasLeftAddon && (
          <StyledAddon fixNormalization={isLeftAddonItinerary}>{leftAddon}</StyledAddon>
        )}

        <div
          className="kirk-price-content"
          ref={this.containerRef}
          aria-label={title}
          tabIndex={-1}
        >
          <TextField
            type={inputTypes.NUMBER} // You can adjust the input type as needed
            id="id"
            name="inputPrice"
            inputMode={inputModes.NUMERIC}
            pattern="pattern"
            labelledBy="aria label"
            disabled={false}
            readOnly={false}
            label=""
            error=""
            onChange={(obj) => this.update(Number(obj.value))}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            className='kirk-price-input'
            focus={false}
            required={false}
            maxLength={1000}
            autoComplete="off"
            title="price text"
            defaultValue={this.state.value.toString()}
          />
        </div>
      </StyledPrice>
    )
  }
}
