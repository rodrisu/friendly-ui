import React from 'react';
export type PushInfoProps = Readonly<{
    className?: string;
    icon?: React.ReactNode;
    headline: string;
    content?: string;
    onAnimationEnd?: Function;
}>;
export declare const PushInfo: ({ className, icon, headline, content, onAnimationEnd, }: PushInfoProps) => JSX.Element;
