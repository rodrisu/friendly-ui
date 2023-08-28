import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { HiddenStopProps } from './HiddenStop';
import { LineProps } from './internals/Line';
export type HiddenStopsProps = A11yProps & LineProps & Readonly<{
    children: React.ReactElement<HiddenStopProps> | Array<React.ReactElement<HiddenStopProps>>;
    label: string;
}>;
export declare const HiddenStops: ({ prevLine, nextLine, children, label, ...props }: HiddenStopsProps) => React.JSX.Element;
