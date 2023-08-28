import React from 'react';
import { AutoCompleteProps } from '../../../autoComplete';
export type AutoCompleteSectionProps = Omit<AutoCompleteProps, 'autoFocus' | 'inputAddon' | 'embeddedInSearchForm' | 'searchForItems'> & {
    renderAutocompleteComponent: (props: Omit<AutoCompleteProps, 'searchForItems'>) => JSX.Element;
    onClose: () => void;
};
export declare const AutoCompleteSection: ({ onClose, className, renderAutocompleteComponent, ...props }: AutoCompleteSectionProps) => React.JSX.Element;
