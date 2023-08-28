import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { NormalizeProps } from '../layout/layoutNormalizer';
export type ItemInfoProps = A11yProps & NormalizeProps & Readonly<{
    className?: string;
    mainTitle: string;
    mainInfo?: string;
    icon?: React.ReactNode;
    tag?: JSX.Element;
}>;
export declare const ItemInfo: (props: ItemInfoProps) => React.JSX.Element;
