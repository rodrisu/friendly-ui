import React from 'react';
import { A11yProps, CommonFieldsProps } from '../_utils/interfaces';
import { OnChangeParameters } from '../_utils/onChange';
export type SelectFieldItem = A11yProps & Readonly<{
    value: string | number;
    label: string;
}>;
export type SelectFieldProps = Partial<CommonFieldsProps> & A11yProps & Readonly<{
    options: Array<SelectFieldItem>;
    defaultValue?: string;
    onChange?: (obj: OnChangeParameters) => void;
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    focus?: boolean;
    focusBorder?: boolean;
    autoFocus?: boolean;
    autoComplete?: string;
}>;
export declare const SelectField: React.ForwardRefExoticComponent<Partial<CommonFieldsProps> & A11yProps & Readonly<{
    options: Array<SelectFieldItem>;
    defaultValue?: string;
    onChange?: (obj: OnChangeParameters) => void;
    onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    focus?: boolean;
    focusBorder?: boolean;
    autoFocus?: boolean;
    autoComplete?: string;
}> & React.RefAttributes<HTMLSelectElement>>;
