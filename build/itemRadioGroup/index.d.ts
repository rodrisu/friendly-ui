import React, { PureComponent } from 'react';
import { A11yProps } from '../_utils/interfaces';
import { OnChangeParameters } from '../_utils/onChange';
import { ItemRadioProps, ItemRadioStatus } from '../itemRadio/ItemRadio';
export type ItemRadioGroupProps = A11yProps & Readonly<{
    name: string;
    children: Array<React.ReactElement<ItemRadioProps>>;
    className?: string;
    value?: string | number | boolean;
    onChange?: (obj: OnChangeParameters) => void;
    onClick?: (obj: OnChangeParameters) => void;
    status?: ItemRadioStatus;
    withSeparators?: boolean;
    withChevrons?: boolean;
}>;
type ItemRadioGroupState = {
    value: string | number | boolean;
};
export declare class ItemRadioGroup extends PureComponent<ItemRadioGroupProps, ItemRadioGroupState> {
    static defaultProps: Partial<ItemRadioGroupProps>;
    state: ItemRadioGroupState;
    static getDerivedStateFromProps(props: ItemRadioGroupProps, state: ItemRadioGroupState): {
        value: string | number | boolean;
    };
    onChange: ({ name, value }: OnChangeParameters) => void;
    onClick: ({ name, value }: OnChangeParameters) => void;
    render(): React.JSX.Element;
}
export {};
