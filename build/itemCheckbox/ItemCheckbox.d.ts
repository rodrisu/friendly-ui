import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { OnChangeParameters } from '../_utils/onChange';
import { NormalizeProps } from '../layout/layoutNormalizer';
export declare enum ItemCheckboxStatus {
    DEFAULT = "default",
    LOADING = "loading"
}
export type ItemCheckboxProps = NormalizeProps & A11yProps & Readonly<{
    labelTitle: string;
    label?: string;
    className?: string;
    name: string;
    leftAddon?: React.ReactNode;
    data?: string;
    dataInfo?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (obj: OnChangeParameters) => void;
    status?: ItemCheckboxStatus;
    key?: string | number;
}>;
export declare const ItemCheckbox: (props: ItemCheckboxProps) => React.JSX.Element;
