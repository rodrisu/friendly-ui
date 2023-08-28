import React from 'react';
export type SubHeaderProps = Readonly<{
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    noHorizontalSpacing?: boolean;
}>;
export declare const SubHeader: ({ children, as, noHorizontalSpacing }: SubHeaderProps) => React.JSX.Element;
