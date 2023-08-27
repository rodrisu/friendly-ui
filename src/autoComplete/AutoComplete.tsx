import React, { Component } from 'react'
import cc from 'classcat'
import { canUseEventListeners } from 'exenv'
import debounce from 'lodash.debounce'
import isEmpty from 'lodash.isempty'

import { ItemStatus } from '../_internals/item'
import { prefix } from '../_utils'
import { OnChangeParameters } from '../_utils/onChange'
import { ContentDivider } from '../divider/contentDivider'
import { ItemInfo } from '../itemInfo'
import { Loader } from '../loader'
import { inputTypes, TextField } from '../textField'
import { StyledAutoComplete } from './AutoComplete.style'
import { AutocompleteItem, AutoCompleteList } from './AutoCompleteListStyle'

type query = string | number | boolean

export { AutocompleteItem }

export type AutocompleteOnChange = {
  readonly name: string
  readonly value: string | number | boolean
  readonly item: AutocompleteItem
}

export type AutocompleteItemToRender = {
  readonly item: AutocompleteItem
  readonly index: number
}

export type AutoCompleteProps = Readonly<{
  name: string
  searchForItems: (query: query) => void
  isSearching?: boolean
  searchOnMount?: boolean
  onInputChange?: (params: Partial<OnChangeParameters>) => void
  searchForItemsMinChars?: number
  defaultValue?: string
  onSelect?: (obj: AutocompleteOnChange) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onClear?: () => void
  className?: string
  inputClassName?: string
  itemClassName?: string
  bodyClassName?: string
  items?: Array<AutocompleteItem>
  maxItems?: number
  itemKey?: (item: AutocompleteItem) => string
  renderBusy?: ({ query }: { query: query }) => React.ReactElement<any>
  renderNoResults?: ({ query }: { query: query }) => string
  renderQuery?: (item: AutocompleteItem) => string
  renderEmptySearch?: Array<AutocompleteItem>
  getItemValue?: (item: AutocompleteItem) => string
  inputAddon?: React.ReactElement<any>
  placeholder?: string
  busyTimeout?: number
  debounceTimeout?: number
  autoFocus?: boolean
  focus?: boolean
  buttonTitle?: string
  showList?: boolean
  onDoneAnimationEnd?: () => void
  autoCorrect?: 'on' | 'off'
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  error?: string | JSX.Element
  selectedItemStatus?: ItemStatus
  embeddedInSearchForm?: boolean
}>

type AutoCompleteState = {
  busy: boolean
  items: Array<AutocompleteItem>
  formattedValue: string
  textfieldValue: string
  lastDefaultValue: string
  query: query
  noResults: boolean
  isSearching: boolean
}

const initialState: AutoCompleteState = {
  busy: false,
  items: [],
  formattedValue: '',
  textfieldValue: '',
  lastDefaultValue: '',
  query: '',
  noResults: false,
  isSearching: false,
}

export class AutoComplete extends Component<AutoCompleteProps, AutoCompleteState> {
  private input: HTMLInputElement
  private busyTimeout: number | void

  static defaultProps: Partial<AutoCompleteProps> = {
    searchOnMount: true,
    isSearching: false,
    searchForItemsMinChars: 3,
    maxItems: Infinity,
    renderBusy: () => <div>Loading…</div>,
    renderNoResults: () => 'No results',
    renderEmptySearch: [],
    onInputChange() {},
    onSelect() {},
    onClear() {},
    renderQuery: item => [item.label, item.labelInfo].filter(Boolean).join(','),
    getItemValue: item => item.label,
    busyTimeout: 150,
    debounceTimeout: 500,
    autoFocus: false,
    focus: false,
    buttonTitle: null,
    defaultValue: '',
    showList: true,
    autoCorrect: 'off',
    disabled: false,
    readOnly: false,
    required: false,
    error: null,
    embeddedInSearchForm: false,
  }

  constructor(props: AutoCompleteProps) {
    super(props)
    if (props.debounceTimeout > 0) {
      this.searchForItems = debounce(this.searchForItems, props.debounceTimeout)
    }
    this.state = {
      ...initialState,
      query: this.props.defaultValue,
      lastDefaultValue: this.props.defaultValue,
      textfieldValue: this.props.defaultValue,
    }
  }

  componentDidMount() {
    if (this.props.searchOnMount) {
      // Triggers the search when the autocomplete is initialised with a default value
      this.searchForItems()
    }

    if (this.input && canUseEventListeners) {
      this.input.addEventListener('keydown', this.onInputKeydown)
    }
  }

  static getDerivedStateFromProps(props: AutoCompleteProps, state: AutoCompleteState) {
    const hasDefaultValueChanged = state.lastDefaultValue !== props.defaultValue
    const baseState = hasDefaultValueChanged
      ? {
          textfieldValue: props.defaultValue,
          lastDefaultValue: props.defaultValue,
          items: [],
        }
      : {}

    if (hasDefaultValueChanged) {
      return {
        ...baseState,
        isSearching: props.isSearching,
      }
    }

    if (state.isSearching && !props.isSearching) {
      return {
        ...baseState,
        isSearching: false,
        busy: false,
        noResults: isEmpty(props.items),
        items: props.items,
      }
    }

    if (state.isSearching !== props.isSearching) {
      return {
        ...baseState,
        isSearching: props.isSearching,
      }
    }

    return null
  }

  componentDidUpdate(prevProps: AutoCompleteProps) {
    const shouldRenderItems = this.props.isSearching && !prevProps.isSearching

    if (shouldRenderItems) {
      this.clearBusyTimeout()
    }
  }

  componentWillUnmount() {
    if (this.input && canUseEventListeners) {
      this.input.removeEventListener('keydown', this.onInputKeydown)
    }
  }

  onInputKeydown = (e: KeyboardEvent) => {
    const KEY_CODE_ENTER = 13
    if (e.keyCode === KEY_CODE_ENTER) {
      e.preventDefault()
    }
  }

  onInputChange = ({ value }: { value: query }) => {
    const textfieldValue = String(value)
    if (this.hasMinCharsForSearch(textfieldValue)) {
      this.setState(
        {
          textfieldValue,
          noResults: false,
          query: value,
        },
        this.searchForItems,
      )
    } else {
      this.clearBusyTimeout()
      this.setState({
        textfieldValue: String(value),
        noResults: false,
        busy: false,
        items: [],
      })
    }
    this.props.onInputChange({ value })
  }

  onSelectItem = (item: AutocompleteItem) => {
    const query = this.props.renderQuery(item)
    this.setState(
      {
        items: [],
        textfieldValue: query,
        query,
        formattedValue: this.props.getItemValue(item),
      },
      () => {
        this.input.select()
        this.props.onSelect({
          name: this.props.name,
          value: this.state.formattedValue,
          item,
        })
      },
    )
  }

  hasMinCharsForSearch(value: string) {
    return value.length >= this.props.searchForItemsMinChars
  }

  searchForItems = () => {
    // If a long `debounceTimeout` is setup, it may happen that a `searchForItems`
    // is still scheduled to be called while the user has modified the query
    // during that lapse of time. Therefore, the check below verify the real input value
    // against the searchForItemsMinChars prop.
    if (!this.hasMinCharsForSearch(this.state.textfieldValue)) {
      return
    }

    this.busyTimeout = window.setTimeout(this.showBusy, this.props.busyTimeout)
    this.props.searchForItems(this.state.query)
  }

  clearBusyTimeout = () => {
    if (this.busyTimeout) {
      this.busyTimeout = clearTimeout(this.busyTimeout)
    }
  }

  showBusy = () => {
    this.setState({ busy: true })
  }

  inputRef = (input: HTMLInputElement) => {
    this.input = input
  }

  reset() {
    this.setState(initialState)
  }

  render() {
    const hasMinCharsForSearch = this.hasMinCharsForSearch(this.state.textfieldValue)
    const shouldDisplayEmptyState =
      !hasMinCharsForSearch && this.props.showList && !isEmpty(this.props.renderEmptySearch)
    const shouldDisplayBusyState = this.state.busy && this.props.showList
    const shouldDisplayNoResults =
      hasMinCharsForSearch && !this.state.busy && this.state.noResults && this.props.showList
    const shouldDisplayAutoCompleteList =
      hasMinCharsForSearch && !isEmpty(this.state.items) && !this.state.busy && this.props.showList
    const listItems = shouldDisplayAutoCompleteList
      ? this.state.items
      : this.props.renderEmptySearch
    const shouldDisplayDivider =
      this.props.embeddedInSearchForm && (listItems.length > 0 || shouldDisplayNoResults)
    const loader =
      this.props.embeddedInSearchForm && this.state.isSearching ? (
        <Loader className="kirk-autoComplete-loader" size={24} inline />
      ) : null

    return (
      /* TODO: BBC-7413 fix a11y issue */
      // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
      <StyledAutoComplete
        role="combobox"
        className={cc([prefix({ autoComplete: true }), this.props.className])}
      >
        <TextField
          type={inputTypes.SEARCH}
          className={this.props.inputClassName}
          name={this.props.name}
          onChange={this.onInputChange}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          onClear={this.props.onClear}
          placeholder={this.props.placeholder}
          defaultValue={String(this.state.textfieldValue)}
          addon={this.props.inputAddon}
          inputRef={this.inputRef}
          autoCorrect={this.props.autoCorrect}
          autoComplete="off"
          autoFocus={this.props.autoFocus}
          focus={this.props.focus}
          buttonTitle={this.props.buttonTitle}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          required={this.props.required}
          error={this.props.error}
          focusBorder={false}
          loader={loader}
        />
        {shouldDisplayDivider && <ContentDivider />}
        {shouldDisplayBusyState && (
          <div className={cc([prefix({ 'autoComplete-body': true }), this.props.bodyClassName])}>
            {this.props.renderBusy({ query: this.state.query })}
          </div>
        )}
        {shouldDisplayNoResults && (
          <div className={cc([this.props.bodyClassName])}>
            <ItemInfo
              mainTitle={this.props.renderNoResults({
                query: this.state.query,
              })}
            />
          </div>
        )}
        <AutoCompleteList
          className={this.props.bodyClassName}
          name={`${this.props.name}-list`}
          items={listItems}
          maxItems={this.props.maxItems}
          onSelect={this.onSelectItem}
          visible={shouldDisplayAutoCompleteList || shouldDisplayEmptyState}
          selectedItemStatus={this.props.selectedItemStatus}
          itemClassName={this.props.itemClassName}
          onDoneAnimationEnd={this.props.onDoneAnimationEnd}
          itemKey={this.props.itemKey}
          withSeparators={!this.props.embeddedInSearchForm}
        />
      </StyledAutoComplete>
    )
  }
}
