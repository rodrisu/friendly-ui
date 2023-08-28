import React from 'react';
export type ColumnedContentSectionProps = Readonly<{
    title?: string;
    topLinkLabel?: string;
    topLinkHref?: string | JSX.Element;
    columnContentList: Array<ColumnContent>;
    backgroundColor?: string;
}>;
export type ColumnContent = {
    readonly title: string;
    readonly content: string;
    readonly media?: Media;
    readonly footerLinkLabel?: string;
    readonly footerLinkHref?: string | JSX.Element;
};
type Media = MediaElement | MediaPictureCover | MediaPictureFit;
export declare enum ColumnedSectionContentMediaKind {
    ELEMENT = "element",
    COVER = "cover",
    FIT = "fit"
}
type MediaElement = {
    readonly kind: ColumnedSectionContentMediaKind;
    readonly element: JSX.Element;
};
type MediaPictureCover = {
    readonly kind: ColumnedSectionContentMediaKind;
    readonly pictureUrl: string;
    readonly href: string;
};
type MediaPictureFit = {
    readonly kind: ColumnedSectionContentMediaKind;
    readonly pictureUrl: string;
};
/**
 * A specialized section which shows some marketing content in columns (usually 3).
 */
export declare const ColumnedContentSection: (props: ColumnedContentSectionProps) => React.JSX.Element;
export {};
