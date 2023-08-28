import React from 'react';
export type MarqueeProps = Readonly<{
    className?: string;
    children: Array<React.ReactNode>;
}>;
export declare const Marquee: (props: MarqueeProps) => JSX.Element;
