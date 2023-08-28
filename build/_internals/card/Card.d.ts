import React from 'react';
export type CardProps = Readonly<{
    className?: string;
    children?: React.ReactNode;
}>;
export declare const Card: ({ className, children }: CardProps) => React.JSX.Element;
