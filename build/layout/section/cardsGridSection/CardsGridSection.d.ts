import React from 'react';
import { SectionContentSize } from '../../../layout/section/baseSection';
import { TripCardProps } from '../../../tripCard';
type ChildrenProps = Array<React.ReactElement<TripCardProps>> | React.ReactElement<TripCardProps>;
export type CardsGridSectionProps = Readonly<{
    children: ChildrenProps;
    className?: string;
    contentSize?: SectionContentSize;
    title?: string | JSX.Element;
    buttonTitle?: string;
    buttonHref?: string | JSX.Element;
}>;
export declare const CardsGridSection: ({ children, className, contentSize, title, buttonTitle, buttonHref, }: CardsGridSectionProps) => React.JSX.Element;
export {};
