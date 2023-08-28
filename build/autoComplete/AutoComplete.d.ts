import React, { Component } from 'react';
import { ItemStatus } from '../_internals/item';
import { OnChangeParameters } from '../_utils/onChange';
import { AutocompleteItem } from './AutoCompleteListStyle';
type query = string | number | boolean;
export { AutocompleteItem };
export type AutocompleteOnChange = {
    readonly name: string;
    readonly value: string | number | boolean;
    readonly item: AutocompleteItem;
};
export type AutocompleteItemToRender = {
    readonly item: AutocompleteItem;
    readonly index: number;
};
export type AutoCompleteProps = Readonly<{
    name: string;
    searchForItems: (query: query) => void;
    isSearching?: boolean;
    searchOnMount?: boolean;
    onInputChange?: (params: Partial<OnChangeParameters>) => void;
    searchForItemsMinChars?: number;
    defaultValue?: string;
    onSelect?: (obj: AutocompleteOnChange) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onClear?: () => void;
    className?: string;
    inputClassName?: string;
    itemClassName?: string;
    bodyClassName?: string;
    items?: Array<AutocompleteItem>;
    maxItems?: number;
    itemKey?: (item: AutocompleteItem) => string;
    renderBusy?: ({ query }: {
        query: query;
    }) => React.ReactElement<any>;
    renderNoResults?: ({ query }: {
        query: query;
    }) => string;
    renderQuery?: (item: AutocompleteItem) => string;
    renderEmptySearch?: Array<AutocompleteItem>;
    getItemValue?: (item: AutocompleteItem) => string;
    inputAddon?: React.ReactElement<any>;
    placeholder?: string;
    busyTimeout?: number;
    debounceTimeout?: number;
    autoFocus?: boolean;
    focus?: boolean;
    buttonTitle?: string;
    showList?: boolean;
    onDoneAnimationEnd?: () => void;
    autoCorrect?: 'on' | 'off';
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    error?: string | JSX.Element;
    selectedItemStatus?: ItemStatus;
    embeddedInSearchForm?: boolean;
}>;
type AutoCompleteState = {
    busy: boolean;
    items: Array<AutocompleteItem>;
    formattedValue: string;
    textfieldValue: string;
    lastDefaultValue: string;
    query: query;
    noResults: boolean;
    isSearching: boolean;
};
export declare class AutoComplete extends Component<AutoCompleteProps, AutoCompleteState> {
    private input;
    private busyTimeout;
    static defaultProps: Partial<AutoCompleteProps>;
    constructor(props: AutoCompleteProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(props: AutoCompleteProps, state: AutoCompleteState): {
        isSearching: boolean;
        textfieldValue: string;
        lastDefaultValue: string;
        items: any[];
    } | {
        isSearching: boolean;
        textfieldValue?: undefined;
        lastDefaultValue?: undefined;
        items?: undefined;
    } | {
        isSearching: boolean;
        busy: boolean;
        noResults: boolean;
        items: AutocompleteItem[];
        textfieldValue: string;
        lastDefaultValue: string;
    } | {
        isSearching: boolean;
        busy: boolean;
        noResults: boolean;
        items: AutocompleteItem[];
        textfieldValue?: undefined;
        lastDefaultValue?: undefined;
    };
    componentDidUpdate(prevProps: AutoCompleteProps): void;
    componentWillUnmount(): void;
    onInputKeydown: (e: KeyboardEvent) => void;
    onInputChange: ({ value }: {
        value: query;
    }) => void;
    onSelectItem: (item: AutocompleteItem) => void;
    hasMinCharsForSearch(value: string): boolean;
    searchForItems: () => void;
    clearBusyTimeout: () => void;
    showBusy: () => void;
    inputRef: (input: HTMLInputElement) => void;
    reset(): void;
    render(): React.JSX.Element;
}
