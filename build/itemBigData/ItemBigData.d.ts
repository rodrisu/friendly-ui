import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { NormalizeProps } from '../layout/layoutNormalizer';
export type ItemBigDataProps = NormalizeProps & A11yProps & Readonly<{
    mainTitle: string;
    mainInfo?: string;
    className?: string;
    tag?: JSX.Element;
}>;
export declare const ItemBigData: (props: ItemBigDataProps) => React.JSX.Element;
