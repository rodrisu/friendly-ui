import React from 'react';
export type BlaBlaCarDailyProps = Readonly<{
    content: Readonly<{
        title: JSX.Element | string;
        paragraph: JSX.Element | string;
        link: string;
    }>;
    href: JSX.Element | string;
}>;
export declare const BlaBlaCarDaily: ({ content, href }: BlaBlaCarDailyProps) => React.JSX.Element;
