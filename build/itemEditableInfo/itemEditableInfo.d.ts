import React from 'react';
import { A11yProps } from '../_utils/interfaces';
export type ItemEditableInfoProps = A11yProps & Readonly<{
    label: string;
    value: string;
    className?: string;
    href?: string | JSX.Element;
    tag?: JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    readonly?: boolean;
}>;
export declare const ItemEditableInfo: (props: ItemEditableInfoProps) => React.JSX.Element;
