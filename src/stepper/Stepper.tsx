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
import { StepperButtonSize, StepperDisplay } from './constants'
import { StyledAddon, StyledStepper } from './Stepper.style'

const StepperValueSize = {
  [StepperDisplay.SMALL]: pxToInteger(font.l.size),
  [StepperDisplay.LARGE]: pxToInteger(font.xxl.size),
}

export type StepperProps = Readonly<{
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
  display?: StepperDisplay
  focus?: boolean
  leftAddon?: JSX.Element
  disabled?: boolean
}>

type StepperState = {
  value: number
  fontSize?: number
}

// Support IE. Same value returned with Number.MAX_SAFE_INTEGER / Number.MIN_SAFE_INTEGER
const defaultInteger = 2 ** 53 - 1
const isTouchScreen = isTouchEventsAvailable()

// NOTE: react-hot-loader will update dynamically the type and break type comparisons.
// A pre-rendered type need to be used to fix it.
// See: https://github.com/gaearon/react-hot-loader#checking-element-types
// @ts-ignore
const ItineraryType = (<Itinerary />).type

export class Stepper extends PureComponent<StepperProps, StepperState> {
  private valueElementRef: RefObject<HTMLDivElement>
  private containerRef: RefObject<HTMLDivElement>

  static defaultProps: Partial<StepperProps> = {
    value: 0,
    step: 1,
    max: defaultInteger,
    min: -defaultInteger,
    format: value => value,
    onChange: () => {},
    display: StepperDisplay.SMALL,
    focus: false,
  }

  filterValue = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max))

  state: StepperState = {
    value: this.filterValue(this.props.value, this.props.min, this.props.max),
  }

  whileButtonDown: number
  buttonDownDelay: number

  constructor(props: StepperProps) {
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

  componentDidUpdate(prevProps: StepperProps) {
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

  handleFontSize() {
    if (!this.valueElementRef.current || this.props.display === StepperDisplay.SMALL) {
      return
    }

    const { format, display } = this.props
    const { value } = this.state

    // Compute available space without paddings
    const availableSpace = this.valueElementRef.current.offsetWidth - pxToInteger(space.l) * 2
    const valueLength = String(format(value)).length
    const optimalSize = Math.trunc(availableSpace / (valueLength * 0.5))
    const maxSize = StepperValueSize[display]

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
    const buttonSize = StepperButtonSize[display]
    const hasLeftAddon = display === StepperDisplay.SMALL && !isEmpty(leftAddon)
    const isLeftAddonItinerary = hasLeftAddon && leftAddon.type === ItineraryType

    return (
      <StyledStepper
        valueColor={this.getValueColor()}
        className={cc(['kirk-stepper', `kirk-stepper-${display}`, className])}
      >
        {hasLeftAddon && (
          <StyledAddon fixNormalization={isLeftAddonItinerary}>{leftAddon}</StyledAddon>
        )}

        <div
          className="kirk-stepper-content"
          ref={this.containerRef}
          aria-label={title}
          tabIndex={-1}
        >
          <Button
            aria-label={decreaseLabel}
            type="button"
            className="kirk-stepper-decrement"
            status={ButtonStatus.UNSTYLED}
            disabled={disabled || isMin}
            isBubble
            {...this.createButtonListeners(this.decrement)}
          >
            <MinusIcon iconColor={color.blue} size={buttonSize} isDisabled={disabled || isMin} />
          </Button>
          <div
            aria-live="polite"
            className={cc(['kirk-stepper-value', valueClassName])}
            style={{ fontSize: `${this.state.fontSize}px` }}
            ref={this.valueElementRef}
          >
            {format(this.state.value)}
          </div>
          <Button
            aria-label={increaseLabel}
            type="button"
            className="kirk-stepper-increment"
            status={ButtonStatus.UNSTYLED}
            disabled={disabled || isMax}
            isBubble
            {...this.createButtonListeners(this.increment)}
          >
            <PlusIcon iconColor={color.blue} size={buttonSize} isDisabled={disabled || isMax} />
          </Button>
        </div>
      </StyledStepper>
    )
  }
}
