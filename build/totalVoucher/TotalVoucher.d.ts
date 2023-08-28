import React from 'react';
import { ButtonProps } from '../button';
export type TotalVoucherProps = Readonly<{
    title: string;
    subTitle: JSX.Element | string;
    terms: Readonly<{
        href: JSX.Element | string;
        label: string;
    }>;
    stepsTitle: JSX.Element | string;
    steps: ReadonlyArray<Readonly<{
        label: string;
        description: string;
    }>>;
    button: React.ReactElement<ButtonProps>;
}>;
export declare const TotalVoucher: ({ title, subTitle, terms, stepsTitle, steps, button, }: TotalVoucherProps) => React.JSX.Element;
