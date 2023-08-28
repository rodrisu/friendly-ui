import React from 'react';
import { A11yProps } from '../_utils/interfaces';
export declare enum TextDisplayType {
    BODY = "body",
    BODYSTRONG = "bodyStrong",
    BUTTON = "button",
    CAPTION = "caption",
    DISPLAY1 = "display1",
    DISPLAY2 = "display2",
    SUBHEADER = "subheader",
    SUBHEADERSTRONG = "subheaderStrong",
    TITLE = "title",
    TITLESTRONG = "titleStrong"
}
export declare enum TextTagType {
    DIV = "div",
    PARAGRAPH = "p",
    SPAN = "span"
}
export type TextProps = A11yProps & Readonly<{
    className?: string;
    children: string | number | React.ReactNode;
    display?: TextDisplayType;
    tag?: TextTagType;
    textColor?: string;
    newlineToBr?: boolean;
    itemProp?: string;
}>;
export declare const Text: (props: TextProps) => React.JSX.Element;
