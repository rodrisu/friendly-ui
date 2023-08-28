import React from 'react';
import { A11yProps } from '../_utils/interfaces';
export type BadgeProps = A11yProps & Readonly<{
    className?: string;
    children: string | JSX.Element | number;
}>;
export declare const Badge: (props: BadgeProps) => React.JSX.Element;
