import React from 'react';
export type TheWhyProps = Readonly<{
    children: string;
    title: string;
    className?: string;
    onClick?: () => void;
}>;
export declare const TheWhy: ({ className, children, title, onClick }: TheWhyProps) => React.JSX.Element;
