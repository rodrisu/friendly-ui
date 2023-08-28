import React, { ReactNode } from 'react';
export type TopBarProps = Readonly<{
    className?: string;
    zIndex: number;
    leftItem?: ReactNode;
    rightItem?: ReactNode;
    centerItem?: ReactNode;
    hasScrolled?: boolean;
}>;
export declare const TopBar: ({ className, leftItem, rightItem, centerItem, zIndex, hasScrolled, }: TopBarProps) => React.JSX.Element;
