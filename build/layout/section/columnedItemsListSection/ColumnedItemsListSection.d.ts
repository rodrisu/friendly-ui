import React from 'react';
import { SectionContentSize } from '../../../layout/section/baseSection';
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type ColumnedItemsListSlugItem = Readonly<{
    label: string | JSX.Element;
    slugLink: JSX.Element;
}>;
export type ColumnedItemsListLinkItem = Readonly<{
    label: string;
    href: string;
}>;
export type ColumnedItemsListInfo = Readonly<{
    mainTitle?: string;
    subTitle?: string;
    list: Array<ColumnedItemsListSlugItem | ColumnedItemsListLinkItem>;
}>;
export type ColumnedItemsListSectionProps = {
    itemsListInfo: ColumnedItemsListInfo;
    expandLabel?: string;
    columns?: number;
    useExpandToggle?: boolean;
    headingLevel?: HeadingLevel;
    displayListOnly?: boolean;
    sectionContentSize?: SectionContentSize;
};
/**
 * A dedicated section including an items list that can be spread into X columns and collapsed after Y results
 */
export declare const ColumnedItemsListSection: ({ expandLabel, itemsListInfo, columns, useExpandToggle, headingLevel, displayListOnly, sectionContentSize, }: ColumnedItemsListSectionProps) => React.JSX.Element;
export {};
