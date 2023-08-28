import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { LineProps } from './internals/Line';
export type AddonProps = A11yProps & LineProps & Readonly<{
    label: string;
}>;
export declare const Addon: ({ prevLine, nextLine, label, ...props }: AddonProps) => React.JSX.Element;
