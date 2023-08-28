import React from 'react';
import { SectionContentSize } from '../../../layout/section/baseSection';
import { QrCardProps } from '../../../qrCard';
import { TripCardProps } from '../../../tripCard';
type CardsProps = TripCardProps | QrCardProps;
type ChildrenProps = Array<React.ReactElement<CardsProps>> | React.ReactElement<CardsProps>;
export type CardsSectionProps = Readonly<{
    children: ChildrenProps;
    className?: string;
    contentSize?: SectionContentSize;
}>;
export declare const CardsSection: ({ children, className, contentSize, }: CardsSectionProps) => React.JSX.Element;
export {};
