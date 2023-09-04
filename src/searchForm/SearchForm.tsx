import React, { Fragment, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import cc from 'classcat'
import { canUseDOM } from 'exenv'

import { color } from '../_utils/branding'
import { useIsLargeMediaSize } from '../_utils/mediaSizeProvider'
import { OnChangeParameters } from '../_utils/onChange'
import { AutocompleteOnChange, AutoCompleteProps } from '../autoComplete'
import { Bullet, BulletTypes } from '../bullet'
import { DatePicker } from '../datePicker'
import { CalendarIcon } from '../icon/calendarIcon'
import { DoubleArrowIcon } from '../icon/doubleArrowIcon'
import { SearchIcon } from '../icon/searchIcon'
import { StandardSeatIcon as StandardSeat } from '../icon/standardSeat'
import { TextTitle } from '../typography/title'
import { AutoCompleteOverlay, AutoCompleteOverlayProps } from './autoComplete/overlay'
import { AutoCompleteSection } from './autoComplete/section'
import { DatePickerOverlay, DatePickerOverlayProps } from './datePicker/overlay'
import { DatePickerSection } from './datePicker/section'
import { Overlay } from './overlay'
import { PriceOverlay } from './price/overlay'
import { PriceSection } from './price/section'
import { StyledSearchForm } from './SearchForm.style'
import { ResponsiveDivider, VerticalDivider } from './SearchFormDivider'
import { SlideSwitchTransition, SlideSwitchTransitionSide } from './SlideSwitchTransition'
import { StepperOverlay } from './stepper/overlay'
import { StepperSection } from './stepper/section'
import { TRANSITION_SECTION_CLASS_NAME, transitionSectionTimeout } from './transitionConfig'

export enum SearchFormDisplay {
  AUTO = 'auto',
  SMALL = 'small',
  LARGE = 'large',
}

export type SearchFormProps = Readonly<{
  className?: string
  onSubmit: (formValues: SearchFormValues) => void
  onChange?: (formValues: SearchFormValues) => void
  disabledFrom?: boolean
  disabledTo?: boolean
  initialFrom?: string
  initialTo?: string
  autocompleteFromPlaceholder: AutoCompleteProps['placeholder']
  autocompleteToPlaceholder: AutoCompleteProps['placeholder']
  renderAutocompleteFrom: AutoCompleteOverlayProps['renderAutocompleteComponent']
  renderAutocompleteTo: AutoCompleteOverlayProps['renderAutocompleteComponent']
  renderDatePickerComponent?: DatePickerOverlayProps['renderDatePickerComponent']
  datepickerProps: SearchFormDatePickerProps
  stepperProps: SearchFormStepperProps
  priceProps: SearchFormPriceProps
  submitButtonText?: string
  submitButtonRef?: React.RefObject<HTMLButtonElement> | null
  display?: SearchFormDisplay
  showDateField?: boolean
  showInvertButton?: boolean
  addon?: JSX.Element
}>

export type SearchFormDatePickerProps = Readonly<{
  defaultValue: string
  format?: (value: string) => string
}>

export type SearchFormStepperProps = Readonly<{
  min: number
  max: number
  defaultValue: number
  increaseLabel: string
  decreaseLabel: string
  title: string
  confirmLabel: string
  format?: (value: number) => string
}>

export type SearchFormPriceProps = Readonly<{
  min: number
  max: number
  defaultValue: number
  increaseLabel: string
  decreaseLabel: string
  title: string
  confirmLabel: string
  format?: (value: number) => string
}>

export enum SearchFormElements {
  DATEPICKER = 'DATEPICKER',
  STEPPER = 'STEPPER',
  PRICE = 'PRICE',
  AUTOCOMPLETE_FROM = 'AUTOCOMPLETE_FROM',
  AUTOCOMPLETE_TO = 'AUTOCOMPLETE_TO',
}

export type SearchFormValues = {
  DATEPICKER: string
  STEPPER: number
  PRICE: number
  AUTOCOMPLETE_FROM?: AutocompleteOnChange
  AUTOCOMPLETE_TO?: AutocompleteOnChange
}

const getPlaceholderText = (
  initial: string,
  autocompleted: string,
  placeholder: string,
): string => {
  if (autocompleted) {
    return autocompleted
  }
  if (initial) {
    return initial
  }

  return placeholder
}

export const SearchForm = ({
  className,
  onSubmit,
  onChange = () => {},
  initialFrom,
  initialTo,
  disabledFrom,
  disabledTo,
  autocompleteFromPlaceholder,
  autocompleteToPlaceholder,
  renderAutocompleteFrom,
  renderAutocompleteTo,
  renderDatePickerComponent = props => <DatePicker {...props} />,
  datepickerProps,
  stepperProps,
  priceProps,
  submitButtonText,
  display = SearchFormDisplay.AUTO,
  showDateField = true,
  submitButtonRef = null,
  showInvertButton = true,
  addon,
}: SearchFormProps) => {
  const isLargeMediaSize = useIsLargeMediaSize()
  const isSmallMediaSize = !isLargeMediaSize

  // We allow the component display to be overriden by a prop
  const isLargeDisplay =
    display === SearchFormDisplay.LARGE || (display === SearchFormDisplay.AUTO && isLargeMediaSize)
  const isSmallDisplay =
    display === SearchFormDisplay.SMALL || (display === SearchFormDisplay.AUTO && isSmallMediaSize)

  const [elementOpened, setElementOpened] = useState<SearchFormElements | null>(null)

  // Used as "trigger" each time the value is changed for the invert animation.
  // Only the change resulting from the invert button should be animated.
  const animationKey = React.useRef(0)

  const [formValues, setFormValues] = useState<SearchFormValues>({
    [SearchFormElements.STEPPER]: stepperProps.defaultValue,
    [SearchFormElements.PRICE]: priceProps.defaultValue,
    [SearchFormElements.DATEPICKER]: datepickerProps.defaultValue,
  })

  useEffect(() => {
    onChange(formValues)
  }, [onChange, formValues])

  const getStepperFormattedValue = () => {
    if (stepperProps.format == null) {
      return `${formValues[SearchFormElements.STEPPER]}`
    }

    return stepperProps.format(formValues[SearchFormElements.STEPPER])
  }

  const getPriceFormattedValue = () => {
    if (priceProps.format == null) {
      return `${formValues[SearchFormElements.PRICE]}`
    }

    return priceProps.format(formValues[SearchFormElements.PRICE])
  }

  const getDatepickerFormattedValue = () => {
    if (datepickerProps.format == null) {
      return formValues[SearchFormElements.DATEPICKER]
    }

    return datepickerProps.format(formValues[SearchFormElements.DATEPICKER])
  }

  const selectedDate = new Date(formValues[SearchFormElements.DATEPICKER])

  const closeElement = (elementToClose: SearchFormElements) => {
    setElementOpened(openedElement => {
      // Make sure we are still on the element we want to close.
      // We don't want to close another element.
      if (openedElement === elementToClose) {
        return null
      }

      return openedElement
    })
  }

  const datepickerConfig = {
    title: getDatepickerFormattedValue(),
    name: 'datepicker',
    initialDate: selectedDate,
    initialMonth: selectedDate,
    onChange: ({ value }: OnChangeParameters) => {
      closeElement(SearchFormElements.DATEPICKER)
      setFormValues(
        (currentFormValues: SearchFormValues): SearchFormValues => ({
          ...currentFormValues,
          [SearchFormElements.DATEPICKER]: value as string,
        }),
      )
    },
    renderDatePickerComponent,
  }

  const stepperConfig = {
    name: 'stepper',
    min: stepperProps.min,
    max: stepperProps.max,
    itemTitle: getStepperFormattedValue(),
    title: stepperProps.title,
    increaseLabel: stepperProps.increaseLabel,
    decreaseLabel: stepperProps.decreaseLabel,
    value: formValues[SearchFormElements.STEPPER],
    onChange: ({ value }: OnChangeParameters) => {
      closeElement(SearchFormElements.STEPPER)
      setFormValues(
        (currentFormValues: SearchFormValues): SearchFormValues => ({
          ...currentFormValues,
          [SearchFormElements.STEPPER]: value as number,
        }),
      )
    },
  }

  const priceConfig = {
    name: 'price',
    min: priceProps.min,
    max: priceProps.max,
    itemTitle: getPriceFormattedValue(),
    title: priceProps.title,
    increaseLabel: priceProps.increaseLabel,
    decreaseLabel: priceProps.decreaseLabel,
    value: formValues[SearchFormElements.PRICE],
    onChange: ({ value }: OnChangeParameters) => {
      closeElement(SearchFormElements.PRICE)
      setFormValues(
        (currentFormValues: SearchFormValues): SearchFormValues => ({
          ...currentFormValues,
          [SearchFormElements.PRICE]: value as number,
        }),
      )
    },
  }

  const autocompleteFromConfig = {
    name: 'from',
    placeholder: autocompleteFromPlaceholder,
    renderAutocompleteComponent: renderAutocompleteFrom,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues(
        (currentFormValues: SearchFormValues): SearchFormValues => ({
          ...currentFormValues,
          [SearchFormElements.AUTOCOMPLETE_FROM]: value,
        }),
      )

      // We only open the destination when it doesn't have a value on large media.
      if (isLargeMediaSize && !initialTo && !formValues[SearchFormElements.AUTOCOMPLETE_TO]) {
        setElementOpened(SearchFormElements.AUTOCOMPLETE_TO)
      } else {
        closeElement(SearchFormElements.AUTOCOMPLETE_FROM)
      }
    },
  }

  const autocompleteToConfig = {
    name: 'to',
    placeholder: autocompleteToPlaceholder,
    renderAutocompleteComponent: renderAutocompleteTo,
    onSelect: (value: AutocompleteOnChange) => {
      setFormValues(
        (currentFormValues: SearchFormValues): SearchFormValues => ({
          ...currentFormValues,
          [SearchFormElements.AUTOCOMPLETE_TO]: value,
        }),
      )

      // As the date have a default value we cannot check whether it was
      // changed by the user.
      if (isLargeMediaSize) {
        setElementOpened(SearchFormElements.DATEPICKER)
      } else {
        closeElement(SearchFormElements.AUTOCOMPLETE_TO)
      }
    },
  }

  const transitionSectionConfig = {
    classNames: TRANSITION_SECTION_CLASS_NAME,
    timeout: transitionSectionTimeout,
    mountOnEnter: true,
    unmountOnExit: true,
  }

  const invertFromTo = () => {
    // Trigger the animation for the next update.
    animationKey.current += 1

    setFormValues(
      (currentFormValues: SearchFormValues): SearchFormValues => ({
        ...currentFormValues,
        [SearchFormElements.AUTOCOMPLETE_FROM]: formValues[SearchFormElements.AUTOCOMPLETE_TO],
        [SearchFormElements.AUTOCOMPLETE_TO]: formValues[SearchFormElements.AUTOCOMPLETE_FROM],
      }),
    )
  }

  const autocompleteFromValue = formValues[SearchFormElements.AUTOCOMPLETE_FROM]
  const autocompleteToValue = formValues[SearchFormElements.AUTOCOMPLETE_TO]

  const doShowInvertButton =
    showInvertButton &&
    (formValues[SearchFormElements.AUTOCOMPLETE_FROM] != null ||
      formValues[SearchFormElements.AUTOCOMPLETE_TO] != null)

  return (
    <StyledSearchForm
      action=""
      noValidate
      className={cc(['kirk-searchForm', className])}
      role="search"
      method="post"
      onSubmit={evt => {
        evt.preventDefault()
        onSubmit(formValues)
      }}
      $isSmallDisplay={isSmallDisplay}
      $isLargeDisplay={isLargeDisplay}
      $showDateField={showDateField}
      $showAddon={Boolean(addon)}
    >
      <div className="kirk-searchForm-from-container">
        <div className="kirk-searchForm-from">
          <SlideSwitchTransition
            side={
              isSmallMediaSize ? SlideSwitchTransitionSide.BOTTOM : SlideSwitchTransitionSide.RIGHT
            }
            childrenKey={animationKey.current}
          >
            <button
              type="button"
              className="kirk-search-button"
              onClick={() => setElementOpened(SearchFormElements.AUTOCOMPLETE_FROM)}
              disabled={disabledFrom}
            >
              <span className="kirk-bullet--searchForm">
                <Bullet type={BulletTypes.SEARCH} />
              </span>

              <TextTitle
                className={cc([
                  'kirk-search-ellipsis',
                  { 'kirk-search-placeholder': !autocompleteFromValue && !initialFrom },
                ])}
              >
                {getPlaceholderText(
                  initialFrom,
                  autocompleteFromValue?.item.label,
                  autocompleteFromPlaceholder,
                )}
              </TextTitle>
            </button>
          </SlideSwitchTransition>
        </div>

        <div className="kirk-searchForm-invert">
          <button
            type="button"
            className="kirk-search-button"
            onClick={invertFromTo}
            // We need to keep it the DOM to preserve the form size.
            disabled={!doShowInvertButton}
          >
            <DoubleArrowIcon iconColor={color.blue} />
          </button>
        </div>
      </div>

      <ResponsiveDivider $isSmallDisplay={isSmallDisplay} $isLargeDisplay={isLargeDisplay} />

      <Overlay
        shouldDisplay={isLargeMediaSize && elementOpened === SearchFormElements.AUTOCOMPLETE_FROM}
        closeOnBlur={() => closeElement(SearchFormElements.AUTOCOMPLETE_FROM)}
        className="kirk-searchForm-overlay kirk-searchForm-autocomplete-from"
      >
        <AutoCompleteOverlay {...autocompleteFromConfig} />
      </Overlay>

      {isSmallMediaSize &&
        canUseDOM &&
        createPortal(
          <CSSTransition
            in={elementOpened === SearchFormElements.AUTOCOMPLETE_FROM}
            {...transitionSectionConfig}
          >
            <AutoCompleteSection
              {...autocompleteFromConfig}
              onClose={() => closeElement(SearchFormElements.AUTOCOMPLETE_FROM)}
            />
          </CSSTransition>,
          document.body,
        )}

      <div className="kirk-searchForm-to">
        <SlideSwitchTransition
          side={isSmallMediaSize ? SlideSwitchTransitionSide.TOP : SlideSwitchTransitionSide.LEFT}
          childrenKey={animationKey.current}
        >
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(SearchFormElements.AUTOCOMPLETE_TO)}
            disabled={disabledTo}
          >
            <span className="kirk-bullet--searchForm">
              <Bullet type={BulletTypes.SEARCH} />
            </span>
            <TextTitle
              className={cc([
                'kirk-search-ellipsis',
                { 'kirk-search-placeholder': !autocompleteToValue && !initialTo },
              ])}
            >
              {getPlaceholderText(
                initialTo,
                autocompleteToValue?.item.label,
                autocompleteToPlaceholder,
              )}
            </TextTitle>
          </button>
        </SlideSwitchTransition>
      </div>

      <ResponsiveDivider $isSmallDisplay={isSmallDisplay} $isLargeDisplay={isLargeDisplay} />

      <Overlay
        shouldDisplay={isLargeMediaSize && elementOpened === SearchFormElements.AUTOCOMPLETE_TO}
        closeOnBlur={() => closeElement(SearchFormElements.AUTOCOMPLETE_TO)}
        className="kirk-searchForm-overlay kirk-searchForm-autocomplete-to"
      >
        <AutoCompleteOverlay {...autocompleteToConfig} />
      </Overlay>

      {isSmallMediaSize &&
        canUseDOM &&
        createPortal(
          <CSSTransition
            in={elementOpened === SearchFormElements.AUTOCOMPLETE_TO}
            {...transitionSectionConfig}
          >
            <AutoCompleteSection
              {...autocompleteToConfig}
              onClose={() => closeElement(SearchFormElements.AUTOCOMPLETE_TO)}
            />
          </CSSTransition>,
          document.body,
        )}

      <div className="kirk-searchForm-dateSeat-container">
        {(isLargeDisplay || showDateField) && (
          <Fragment>
            <div className="kirk-searchForm-date">
              <button
                type="button"
                className="kirk-search-button"
                onClick={() => setElementOpened(SearchFormElements.DATEPICKER)}
              >
                <CalendarIcon />
                <TextTitle className="kirk-search-ellipsis">
                  {getDatepickerFormattedValue()}
                </TextTitle>
              </button>
            </div>

            <Overlay
              shouldDisplay={isLargeMediaSize && elementOpened === SearchFormElements.DATEPICKER}
              closeOnBlur={() => closeElement(SearchFormElements.DATEPICKER)}
              className="kirk-searchForm-overlay kirk-searchForm-datepicker"
            >
              <DatePickerOverlay {...datepickerConfig} />
            </Overlay>

            {isSmallMediaSize &&
              canUseDOM &&
              createPortal(
                <CSSTransition
                  in={elementOpened === SearchFormElements.DATEPICKER}
                  {...transitionSectionConfig}
                >
                  <DatePickerSection
                    {...datepickerConfig}
                    onClose={() => closeElement(SearchFormElements.DATEPICKER)}
                  />
                </CSSTransition>,
                document.body,
              )}

            <VerticalDivider />
          </Fragment>
        )}

        <div className="kirk-searchForm-seats">
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(SearchFormElements.STEPPER)}
          >
            <StandardSeat />
            <TextTitle className="kirk-search-ellipsis">{getStepperFormattedValue()}</TextTitle>
          </button>
        </div>

        <Overlay
          shouldDisplay={isLargeMediaSize && elementOpened === SearchFormElements.STEPPER}
          closeOnBlur={() => closeElement(SearchFormElements.STEPPER)}
          className="kirk-searchForm-overlay kirk-searchForm-stepper"
        >
          <StepperOverlay
            {...stepperConfig}
            onChange={({ value }) => {
              setFormValues(
                (currentFormValues: SearchFormValues): SearchFormValues => ({
                  ...currentFormValues,
                  [SearchFormElements.STEPPER]: value as number,
                }),
              )
            }}
          />
        </Overlay>

        {isSmallMediaSize &&
          canUseDOM &&
          createPortal(
            <CSSTransition
              in={elementOpened === SearchFormElements.STEPPER}
              {...transitionSectionConfig}
            >
              <StepperSection
                {...stepperConfig}
                confirmLabel={stepperProps.confirmLabel}
                onClose={() => closeElement(SearchFormElements.STEPPER)}
              />
            </CSSTransition>,
            document.body,
          )}

        <VerticalDivider />

        <div className="kirk-searchForm-price">
          <button
            type="button"
            className="kirk-search-button"
            onClick={() => setElementOpened(SearchFormElements.PRICE)}
          >
            <StandardSeat />
            <TextTitle className="kirk-search-ellipsis">{getPriceFormattedValue()}</TextTitle>
          </button>
        </div>

        <Overlay
          shouldDisplay={isLargeMediaSize && elementOpened === SearchFormElements.PRICE}
          closeOnBlur={() => closeElement(SearchFormElements.PRICE)}
          className="kirk-searchForm-overlay kirk-searchForm-price"
        >
          <PriceOverlay
            {...priceConfig}
            onChange={({ value }) => {
              setFormValues(
                (currentFormValues: SearchFormValues): SearchFormValues => ({
                  ...currentFormValues,
                  [SearchFormElements.PRICE]: value as number,
                }),
              )
            }}
          />
        </Overlay>

        {isSmallMediaSize &&
          canUseDOM &&
          createPortal(
            <CSSTransition
              in={elementOpened === SearchFormElements.PRICE}
              {...transitionSectionConfig}
            >
              <PriceSection
                {...priceConfig}
                confirmLabel={priceProps.confirmLabel}
                onClose={() => closeElement(SearchFormElements.PRICE)}
              />
            </CSSTransition>,
            document.body,
          )}
      </div>

      {isSmallDisplay && addon && (
        <Fragment>
          <ResponsiveDivider $isSmallDisplay={isSmallDisplay} $isLargeDisplay={isLargeDisplay} />
          <div className="kirk-searchForm-addon">{addon}</div>
        </Fragment>
      )}

      <div className="kirk-searchForm-submit">
        <button
          type="submit"
          className="kirk-search-button"
          data-testid="kirk-search-form-submit-buttom"
          ref={submitButtonRef}
        >
          {(isLargeDisplay || !submitButtonText) && (
            <SearchIcon iconColor={color.white} strokeWidth="2" />
          )}
          {submitButtonText && isSmallDisplay && (
            <TextTitle isInverted>{submitButtonText}</TextTitle>
          )}
        </button>
      </div>
    </StyledSearchForm>
  )
}
