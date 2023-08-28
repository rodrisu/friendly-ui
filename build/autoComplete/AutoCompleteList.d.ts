import React, { Component } from 'react';
import { ItemStatus } from '../_internals/item';
export type AutocompleteItem = {
    readonly id: string;
    readonly label: string;
    readonly labelInfo?: string;
    readonly leftAddon?: JSX.Element;
};
export type AutoCompleteListProps = Readonly<{
    name: string;
    onSelect?: (item: AutocompleteItem) => void;
    className?: string;
    items?: Array<AutocompleteItem>;
    maxItems?: number;
    itemClassName?: string;
    onDoneAnimationEnd?: () => void;
    itemKey?: (item: AutocompleteItem) => string;
    visible?: boolean;
    selectedItemStatus?: ItemStatus;
    withSeparators?: boolean;
}>;
type AutoCompleteListState = {
    highlightedIndex: number;
    selectedIndex: number;
};
export declare class AutoCompleteList extends Component<AutoCompleteListProps, AutoCompleteListState> {
    static defaultProps: Partial<AutoCompleteListProps>;
    state: AutoCompleteListState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: AutoCompleteListProps): void;
    componentWillUnmount(): void;
    onKeyboardEventArrowDown: (e: Event) => void;
    onKeyboardEventArrowUp: (e: Event) => void;
    onKeyboardEventEnter: (e: Event) => void;
    handleKeydown: (e: KeyboardEvent) => void;
    onSelect: (itemIndex: number, item: AutocompleteItem) => void;
    render(): React.JSX.Element;
}
export {};
