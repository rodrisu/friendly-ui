import React from 'react';
import { AutocompleteItem, AutocompleteOnChange } from './index';
type AutoCompleteExampleProps = Readonly<{
    className?: string;
    defaultValue?: string;
    searchOnMount?: boolean;
    searchForItemsDelay?: number;
    renderEmptySearch?: Array<AutocompleteItem>;
    inputAddon?: React.ReactElement;
    onSelect?: (obj: AutocompleteOnChange) => void;
    error?: string | JSX.Element;
    embeddedInSearchForm?: boolean;
}>;
export declare const AutoCompleteExample: ({ className, searchForItemsDelay, renderEmptySearch, onSelect, inputAddon, error, defaultValue, embeddedInSearchForm, }: AutoCompleteExampleProps) => React.JSX.Element;
export {};
