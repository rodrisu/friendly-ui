import React from 'react';
import { A11yProps } from '../../_utils/interfaces';
import { LineProps } from './Line';
export type ItineraryItemProps = A11yProps & LineProps & Readonly<{
    time?: string;
    children: React.ReactNode;
    href?: string | JSX.Element;
}>;
export declare const ItineraryItem: ({ time, prevLine, nextLine, children, bullet, href, ...props }: ItineraryItemProps) => React.JSX.Element;
