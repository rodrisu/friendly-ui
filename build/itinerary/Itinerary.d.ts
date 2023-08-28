import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { NormalizeProps } from '../layout/layoutNormalizer';
export type ItineraryProps = A11yProps & NormalizeProps & Readonly<{
    children: Array<JSX.Element>;
    small?: boolean;
}>;
export declare const Itinerary: ({ children, small, ...props }: ItineraryProps) => React.JSX.Element;
