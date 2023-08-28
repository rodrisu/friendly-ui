import React from 'react';
import { A11yProps } from '../_utils/interfaces';
export type QrCardProps = A11yProps & Readonly<{
    className?: string;
    imageUrl: string;
    imageAlt?: string;
    itemMainTitle?: string;
    itemMainInfo?: string;
    mainTitle: string;
}>;
export declare const QrCard: (props: QrCardProps) => React.JSX.Element;
