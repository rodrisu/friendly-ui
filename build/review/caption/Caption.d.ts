import React from 'react';
export type CaptionProps = Readonly<{
    children: string;
    isoDate: string;
    href?: string | JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    secondaryText?: string;
}>;
export declare const Caption: ({ children, href, onClick, secondaryText, isoDate }: CaptionProps) => React.JSX.Element;
