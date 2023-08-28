import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { OnChangeParameters } from '../_utils/onChange';
import { NormalizeProps } from '../layout/layoutNormalizer';
export declare enum ItemRadioStatus {
    DEFAULT = "default",
    LOADING = "loading"
}
export type ItemRadioProps = A11yProps & NormalizeProps & Readonly<{
    value: string | number;
    labelTitle: string;
    className?: string;
    name?: string;
    leftAddon?: React.ReactNode;
    label?: string;
    data?: string;
    dataInfo?: string;
    checked?: boolean;
    disabled?: boolean;
    chevron?: boolean;
    highlighted?: boolean;
    onChange?: (obj: OnChangeParameters) => void;
    onClick?: (obj: OnChangeParameters) => void;
    status?: ItemRadioStatus;
    key?: string | number;
}>;
export declare const ItemRadio: (props: ItemRadioProps) => React.JSX.Element;
