import React from 'react';
export declare enum SectionContentSize {
    SMALL = "small",
    LARGE = "large"
}
export type BaseSectionProps = Readonly<{
    className?: string;
    contentClassName?: string;
    backgroundStyle?: object;
    tagName?: string;
    role?: string;
    children: JSX.Element | string | React.ReactNode;
    contentSize?: SectionContentSize;
    noHorizontalSpacing?: boolean;
}>;
/**
 * The core section: It sections horizontally a page while fitting its
 * content in width-constrained and centered column.
 */
export declare const BaseSection: (props: BaseSectionProps) => React.JSX.Element;
