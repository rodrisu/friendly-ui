import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { LineProps } from './internals/Line';
export type ConnectionProps = A11yProps & LineProps & Readonly<{
    label: string;
}>;
export declare const Connection: ({ prevLine, nextLine, label, ...props }: ConnectionProps) => React.JSX.Element;
