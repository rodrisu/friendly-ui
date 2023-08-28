import React, { FunctionComponent } from 'react';
import { A11yProps } from '../_utils/interfaces';
import { ItemCheckboxProps } from '../itemCheckbox/ItemCheckbox';
import { ItemChoiceProps } from '../itemChoice';
import { ItemRadioProps } from '../itemRadio/ItemRadio';
export declare const ItemsListDivider: FunctionComponent;
export type ItemsListChild = React.ReactElement<ItemChoiceProps> | React.ReactElement<ItemRadioProps> | React.ReactElement<ItemCheckboxProps> | null;
type ChildrenType = ItemsListChild | Array<ItemsListChild>;
export type ItemsListProps = A11yProps & Readonly<{
    children: ChildrenType;
    withSeparators?: boolean;
    className?: string;
    keyGenerator?: (index: number) => string | number;
}>;
export declare const ItemsList: (props: ItemsListProps) => React.JSX.Element;
export {};
