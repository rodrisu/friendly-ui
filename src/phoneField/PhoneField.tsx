import React, { PureComponent, RefObject } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'
import isEqual from 'lodash.isequal'

import { allCountries, AllCountryPhoneData } from 'country-telephone-data'

import { prefix } from '../_utils'
import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import { OnChangeParameters } from '../_utils/onChange'
import { SelectField } from '../selectField'
import { inputTypes, TextField } from '../textField'
import { StyledPhoneField } from './PhoneField.style'

type FormattedCountryPhoneData = {
  name: string
  iso2: string
  dialCode: string
}

type MappedCountryPhoneData = {
  value: string
  label: string
}

export type PhoneFieldCustomCountryNames = {
  [key: string]: string
}

export enum FIELDS {
  PHONENUMBER = 'phoneNumber',
  PHONEREGION = 'phoneRegion',
}

export type PhoneFieldOnChangeParameters = {
  name: string
  value: {
    [FIELDS.PHONENUMBER]: string
    [FIELDS.PHONEREGION]: string
    phonePrefix: string
    completePhoneNumber: string
  }
}

type errorField = string | JSX.Element
export type PhoneFieldProps = A11yProps &
  Readonly<{
    name: string
    onChange: (obj: PhoneFieldOnChangeParameters) => void
    className?: string
    innerWrapperClassName?: string
    selectFieldLabel?: string
    textFieldTitle?: string
    textFieldPlaceholder?: string
    defaultRegionValue?: string
    defaultPhoneValue?: string
    countryWhitelist?: Array<string>
    customCountryNames?: PhoneFieldCustomCountryNames
    isInline?: boolean
    focus?: boolean
    selectAutoFocus?: boolean
    error?: errorField
  }>

type PhoneFieldState = {
  countryData: Array<MappedCountryPhoneData>
  countryWhitelist: Array<string>
  phonePrefix: string
  completePhoneNumber: string
  // Make the type of [key: string]: string etc. assignable for setState()
  [key: string]: any
}

const allCountryPhoneData: Array<AllCountryPhoneData> = allCountries

/* Format and keep only used data */
const formattedCountryPhoneData: Array<FormattedCountryPhoneData> = allCountryPhoneData.map(
  countryData => ({
    name: countryData.name,
    iso2: countryData.iso2.toUpperCase(),
    dialCode: `+${countryData.dialCode}`,
  }),
)
/**
 * Filter countries data according to whitelist
 * @param {Array} countryList in ISO2 format ex: ['FR', 'ES']
 * @return {formattedCountriesPhoneData}
 */
const filterIso2 = (countryList: Array<string>) =>
  formattedCountryPhoneData.filter(country => countryList.includes(country.iso2))

/**
 * Return country data according to ISO2 defaultValue
 * @param {string} countryDefault ISO2 format ex: 'FR'
 * @return {formattedCountriesPhoneData}
 */
const findIso2 = (countryDefault: string): FormattedCountryPhoneData =>
  formattedCountryPhoneData.find(country => country.iso2 === countryDefault)

const mapCountriesPhoneData = (
  countryData: Array<FormattedCountryPhoneData>,
  countryNames: PhoneFieldCustomCountryNames,
): Array<MappedCountryPhoneData> =>
  countryData.map(data => ({
    value: data.iso2,
    label: `${!isEmpty(countryNames[data.iso2]) ? countryNames[data.iso2] : data.name} ${
      data.dialCode
    }`,
  }))

/* Alphabetically sorted */
const sortCountriesPhoneData = (
  mappedCountryPhoneData: Array<MappedCountryPhoneData>,
): Array<MappedCountryPhoneData> =>
  mappedCountryPhoneData.sort((a, b) => {
    if (a.label < b.label) {
      return -1
    }
    if (a.label > b.label) {
      return 1
    }
    return 0
  })

const iso2toDialCode = (iso2Value: string) => {
  if (isEmpty(iso2Value)) {
    return ''
  }
  const countryPhoneData = findIso2(iso2Value)
  if (countryPhoneData) {
    return countryPhoneData.dialCode
  }
  return ''
}

const DisplayError = (error: errorField) => {
  const className = 'kirk-error-message'

  return React.isValidElement(error) ? (
    React.cloneElement(error, { className } as Object)
  ) : (
    <span role="alert" className={className}>
      {error}
    </span>
  )
}

const countryData = (whitelist: Array<string>, countryNames: PhoneFieldCustomCountryNames) => {
  if (!isEmpty(whitelist)) {
    const whiteListCountriesPhoneData = filterIso2(whitelist)
    const whitelistMapped = mapCountriesPhoneData(whiteListCountriesPhoneData, countryNames)

    return sortCountriesPhoneData(whitelistMapped)
  }
  const countriesDatasMapped = mapCountriesPhoneData(formattedCountryPhoneData, countryNames)
  return sortCountriesPhoneData(countriesDatasMapped)
}

/**
 * TODO: BBCSPA-3355 Fix A11y issues on label and error state
 */
export class PhoneField extends PureComponent<PhoneFieldProps, PhoneFieldState> {
  private ref: RefObject<HTMLSelectElement>
  constructor(props: PhoneFieldProps) {
    super(props)
    this.ref = React.createRef()
  }
  static defaultProps: Partial<PhoneFieldProps> = {
    defaultRegionValue: '',
    defaultPhoneValue: '',
    countryWhitelist: [],
    customCountryNames: {},
    isInline: true,
  }

  state = {
    countryData: countryData(this.props.countryWhitelist, this.props.customCountryNames),
    countryWhitelist: this.props.countryWhitelist,
    [FIELDS.PHONENUMBER]: this.props.defaultPhoneValue,
    [FIELDS.PHONEREGION]: !isEmpty(this.props.defaultRegionValue)
      ? this.props.defaultRegionValue
      : '',
    phonePrefix: iso2toDialCode(this.props.defaultRegionValue),
    completePhoneNumber:
      iso2toDialCode(this.props.defaultRegionValue) + this.props.defaultPhoneValue,
    hasFocus: false,
  }

  handleChange = ({ name, value }: OnChangeParameters) => {
    this.setState({ [name]: value }, () => {
      this.props.onChange({
        name: this.props.name,
        value: {
          [FIELDS.PHONENUMBER]: this.state[FIELDS.PHONENUMBER],
          [FIELDS.PHONEREGION]: this.state[FIELDS.PHONEREGION],
          phonePrefix: iso2toDialCode(this.state[FIELDS.PHONEREGION]),
          completePhoneNumber:
            iso2toDialCode(this.state[FIELDS.PHONEREGION]) + this.state[FIELDS.PHONENUMBER],
        },
      })
    })
  }

  static getDerivedStateFromProps(props: PhoneFieldProps, state: PhoneFieldState) {
    if (!isEqual(props.countryWhitelist, state.countryWhitelist)) {
      return {
        countryData: countryData(props.countryWhitelist, props.customCountryNames),
        countryWhitelist: props.countryWhitelist,
      }
    }

    return null
  }

  componentDidMount() {
    if (this.ref && this.props.focus) {
      this.ref.current.focus()
    }
  }

  componentDidUpdate(prevProps: PhoneFieldProps) {
    if (this.ref && this.props.focus && prevProps.focus !== this.props.focus) {
      this.ref.current.focus()
    }
  }

  onFocus = () => {
    this.setState({ hasFocus: true })
  }

  onBlur = () => {
    this.setState({ hasFocus: false })
  }

  render() {
    const {
      selectFieldLabel,
      textFieldTitle,
      textFieldPlaceholder,
      defaultPhoneValue,
      isInline,
      selectAutoFocus,
      error,
    } = this.props

    const a11yAttrs = pickA11yProps<PhoneFieldProps>(this.props)

    const baseClassName = cc([prefix({ phoneField: true })])
    const wrapperClassName = `${baseClassName}-wrapper`

    const classNames = cc([
      isInline ? `${wrapperClassName}--inline` : wrapperClassName,
      this.props.innerWrapperClassName,
      this.state.hasFocus && `${wrapperClassName}--hasFocus`,
    ])

    return (
      <StyledPhoneField
        className={cc([baseClassName, prefix({ error: !!error }), this.props.className])}
      >
        <div className={classNames} {...a11yAttrs}>
          <div className={`${wrapperClassName}--background`}>
            <SelectField
              name={FIELDS.PHONEREGION}
              options={this.state.countryData}
              aria-label={selectFieldLabel}
              defaultValue={this.props.defaultRegionValue}
              onChange={this.handleChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              focusBorder={!isInline}
              autoFocus={selectAutoFocus}
              autoComplete="tel-country-code"
              ref={this.ref}
            />
            <TextField
              type={inputTypes.TEL}
              name={FIELDS.PHONENUMBER}
              placeholder={textFieldPlaceholder}
              defaultValue={defaultPhoneValue}
              onChange={this.handleChange}
              title={textFieldTitle}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              focusBorder={!isInline}
              autoComplete="tel-national"
            />
          </div>
        </div>
        {!!error && DisplayError(error)}
      </StyledPhoneField>
    )
  }
}
