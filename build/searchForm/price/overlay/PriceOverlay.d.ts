import React from 'react';
import { PriceProps } from '../../../price';
export type PriceOverlayProps = PriceProps & Readonly<{
    itemTitle: string;
}>;
export declare const PriceOverlay: ({ itemTitle, className, ...props }: PriceOverlayProps) => React.JSX.Element;
