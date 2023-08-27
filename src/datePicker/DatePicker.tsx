import React, { PureComponent } from 'react'
import DayPicker, { CaptionElementProps, DayModifiers, NavbarElementProps } from 'react-day-picker'
import cc from 'classcat'

import { prefix } from '../_utils'
import { color } from '../_utils/branding'
import { OnChangeParameters } from '../_utils/onChange'
import { Button, ButtonStatus } from '../button'
import { ArrowIcon } from '../icon/arrowIcon'
import { StyledDatePicker } from './DatePicker.style'

const BASE_CLASSNAME = 'datepicker'

const defaultWeekdaysLong = [0, 1, 2, 3, 4, 5, 6].map(weekday =>
  DayPicker.LocaleUtils.formatWeekdayLong(weekday),
)
const defaultWeekdaysShort = [0, 1, 2, 3, 4, 5, 6].map(weekday =>
  DayPicker.LocaleUtils.formatWeekdayShort(weekday),
)
const defaultMonths = DayPicker.LocaleUtils.getMonths()

export enum DatePickerOrientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export type DatePickerProps = Readonly<{
  name: string
  locale?: string
  weekdaysShort?: Array<string>
  weekdaysLong?: Array<string>
  months?: Array<string>
  onChange?: (obj: OnChangeParameters) => void
  initialDate?: Date
  initialMonth?: Date
  className?: string
  numberOfMonths?: number
  orientation?: DatePickerOrientation
  isOutsideRange?: (day: Date) => boolean
  fromMonth?: Date
  toMonth?: Date
  firstDayOfWeek?: number
  stickyPositionTop?: number
  focus?: boolean
}>

export type DatePickerState = {
  date: Date
}

export class DatePicker extends PureComponent<DatePickerProps, DatePickerState> {
  static defaultProps: Partial<DatePickerProps> = {
    locale: 'en',
    weekdaysShort: defaultWeekdaysShort,
    weekdaysLong: defaultWeekdaysLong,
    months: defaultMonths,
    numberOfMonths: 2,
    initialDate: null,
    initialMonth: new Date(),
    isOutsideRange: day => DayPicker.DateUtils.isDayBefore(day, new Date()),
    orientation: DatePickerOrientation.HORIZONTAL,
    fromMonth: new Date(),
    toMonth: new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate()),
    firstDayOfWeek: 0,
    stickyPositionTop: 0,
    focus: false,
  }

  state = {
    date: this.props.initialDate,
  }

  dayPickerContainer = React.createRef<HTMLDivElement>()

  formatMonthTitle = (date: Date): string => {
    const currentYear = `${new Date().getFullYear()}`
    return `${this.props.months[date.getMonth()]} ${date.getFullYear()}`.replace(currentYear, '')
  }

  onDayClick = (date: Date, modifiers: DayModifiers) => {
    if (!modifiers.disabled) {
      this.setState({ date })

      if (this.props.onChange) {
        const yearString = `${date.getFullYear()}`
        const monthString = `${date.getMonth() + 1}`.padStart(2, '0')
        const dayString = `${date.getDate()}`.padStart(2, '0')
        this.props.onChange({
          name: this.props.name,
          value: `${yearString}-${monthString}-${dayString}`,
        })
      }
    }
  }

  renderNavbar = (props: NavbarElementProps) => {
    if (this.props.orientation === DatePickerOrientation.VERTICAL) {
      // re-order weekdays starting from given firstDayOfWeek
      const orderedWeekdays = [
        ...this.props.weekdaysShort.slice(this.props.firstDayOfWeek),
        ...this.props.weekdaysShort.slice(0, this.props.firstDayOfWeek),
      ]
      const style = { top: `${this.props.stickyPositionTop}px` }
      return (
        <div
          className={cc(prefix({ 'sticky-weekdays': true }, BASE_CLASSNAME))}
          style={style}
          aria-hidden="true"
        >
          <div className={cc(prefix({ 'sticky-weekdaysrow': true }, BASE_CLASSNAME))}>
            {orderedWeekdays.map(weekday => (
              <div className={cc(prefix({ 'sticky-weekday': true }, BASE_CLASSNAME))} key={weekday}>
                {weekday}
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className={props.className}>
        {props.showPreviousButton && (
          <Button
            status={ButtonStatus.TERTIARY}
            className={prefix({ 'previous-month': true }, BASE_CLASSNAME)}
            onClick={() => props.onPreviousClick()}
            isBubble
          >
            <ArrowIcon iconColor={color.blue} />
          </Button>
        )}
        {props.showNextButton && (
          <Button
            status={ButtonStatus.TERTIARY}
            className={prefix({ 'next-month': true }, BASE_CLASSNAME)}
            onClick={() => props.onNextClick()}
            isBubble
          >
            <ArrowIcon right iconColor={color.blue} />
          </Button>
        )}
      </div>
    )
  }

  renderCaption = (props: CaptionElementProps) => (
    <div className={cc([prefix({ 'month-caption': true }, BASE_CLASSNAME), 'DayPicker-Caption'])}>
      {props.localeUtils.formatMonthTitle(props.date)}
    </div>
  )

  renderDay = (day: Date) => <span>{day.getDate()}</span>

  scrollToSelectedMonth = () => {
    const { initialDate, initialMonth } = this.props

    if (initialDate === null) {
      return
    }

    // Get the number of months between initialMonth (first month) and initialDate (selected date)
    // This gives us the index to select the right month in '.DayPicker-Month' array
    const month =
      (initialDate.getFullYear() - initialMonth.getFullYear()) * 12 +
      initialDate.getMonth() -
      initialMonth.getMonth()

    const selectedMonth = this.dayPickerContainer.current.querySelectorAll('.DayPicker-Month')[
      month
    ] as HTMLElement

    if (typeof selectedMonth === 'undefined') {
      return
    }

    const top = selectedMonth.offsetTop + this.props.stickyPositionTop
    if (top > window.innerHeight + window.pageYOffset) {
      window.scrollTo(0, top)
    }
  }

  componentDidMount() {
    this.scrollToSelectedMonth()
    if (this.dayPickerContainer.current && this.props.focus) {
      const datePickerFocusableElement = this.dayPickerContainer.current.querySelector(
        '.DayPicker-wrapper',
      ) as HTMLElement
      if (datePickerFocusableElement) {
        datePickerFocusableElement.focus()
      }
    }
  }

  componentDidUpdate() {
    this.scrollToSelectedMonth()
  }

  render() {
    const {
      className,
      numberOfMonths,
      isOutsideRange,
      orientation,
      fromMonth,
      toMonth,
      weekdaysShort,
      weekdaysLong,
      months,
      firstDayOfWeek,
      initialMonth,
    } = this.props
    const { date } = this.state
    const layoutClassName = `months-grid-${numberOfMonths}`

    return (
      <StyledDatePicker
        ref={this.dayPickerContainer}
        className={cc([
          `kirk-${BASE_CLASSNAME}`,
          className,
          prefix({ [orientation]: true }, BASE_CLASSNAME),
          prefix({ [layoutClassName]: true }, BASE_CLASSNAME),
        ])}
      >
        <DayPicker
          numberOfMonths={numberOfMonths}
          onDayClick={this.onDayClick}
          selectedDays={date}
          disabledDays={isOutsideRange}
          fromMonth={fromMonth}
          pagedNavigation
          navbarElement={this.renderNavbar}
          captionElement={this.renderCaption}
          renderDay={this.renderDay}
          weekdaysShort={weekdaysShort}
          weekdaysLong={weekdaysLong}
          months={months}
          firstDayOfWeek={firstDayOfWeek}
          localeUtils={{ ...DayPicker.LocaleUtils, formatMonthTitle: this.formatMonthTitle }}
          initialMonth={initialMonth}
          toMonth={toMonth}
        />
      </StyledDatePicker>
    )
  }
}
