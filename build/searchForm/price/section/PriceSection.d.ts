import React from 'react';
import { PriceProps } from '../../../price';
export type PriceSectionProps = PriceProps & Readonly<{
    itemTitle: string;
    confirmLabel: string;
    onClose: () => void;
    onConfirm?: (event: React.MouseEvent<HTMLElement>) => void;
}>;
export declare const PriceSection: ({ itemTitle, className, onClose, confirmLabel, onChange, ...props }: PriceSectionProps) => React.JSX.Element;
