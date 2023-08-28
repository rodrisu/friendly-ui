import React from 'react';
import { ItemChoiceProps } from '../../../itemChoice';
export type HighlightItemsType = ItemChoiceProps & Readonly<{
    hidden?: boolean;
}>;
export type HighlightsType = {
    heading: string;
    items: Array<HighlightItemsType>;
};
export type HighlightSectionProps = Readonly<{
    className?: string;
    highlights: {
        featured: HighlightsType;
        optional?: HighlightsType;
    };
    toggle: {
        on: string;
        off: string;
    };
}>;
export declare const HighlightSection: ({ highlights, toggle, className }: HighlightSectionProps) => React.JSX.Element;
