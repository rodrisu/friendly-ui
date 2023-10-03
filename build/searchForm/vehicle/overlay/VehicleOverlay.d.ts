/// <reference types="react" />
import { AutoCompleteProps } from '../../../autoComplete';
export type AutoCompleteOverlayProps = Omit<AutoCompleteProps, 'autoFocus' | 'inputAddon' | 'embeddedInSearchForm' | 'searchForItems'> & {
    renderAutocompleteComponent: (props: Omit<AutoCompleteProps, 'searchForItems'>) => JSX.Element;
};
export declare const AutoCompleteOverlay: ({ renderAutocompleteComponent, ...props }: AutoCompleteOverlayProps) => JSX.Element;
