import React from 'react';
export type FilterBarSupplyInfo = {
    icon: React.ElementType;
    iconTitle: string;
    liquidity: React.ReactNode;
    ariaLabel: string;
    isDisabled?: boolean;
};
export type FilterBarProps = Readonly<{
    ctaText: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    supplyInfo: Array<FilterBarSupplyInfo>;
    isLoading?: boolean;
}>;
export declare const FilterBar: ({ supplyInfo, isLoading, onClick, ctaText }: FilterBarProps) => React.JSX.Element;
