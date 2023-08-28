import React from 'react';
import { A11yProps } from '../_utils/interfaces';
export type HiddenStopProps = A11yProps & Readonly<{
    label: string;
}>;
export declare const HiddenStop: ({ label, ...props }: HiddenStopProps) => React.JSX.Element;
