import React from 'react';
import { SearchFormProps } from '../searchForm';
export type PriceSimulatorProps = Readonly<{
    title: string;
    illustration?: JSX.Element | null;
    terms?: JSX.Element | string | null;
    children: React.ReactElement<SearchFormProps>;
}>;
export declare const PriceSimulator: ({ title, illustration, terms, children }: PriceSimulatorProps) => React.JSX.Element;
