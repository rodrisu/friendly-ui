import React from 'react';
export type Icon = Readonly<{
    size?: number | string;
    className?: string;
    iconClassName?: string;
    title?: string;
    iconColor?: string;
    badgeAriaLabel?: string;
    badgeContent?: string;
    isDisabled?: boolean;
}>;
export type IconProps = Icon & Readonly<{
    children: JSX.Element;
    viewBox?: string;
}>;
export declare const BaseIconDefaultProps: {
    className: string;
    iconClassName: string;
    iconColor: string;
    size: number;
    title: string;
    badgeAriaLabel: string;
    badgeContent: string;
    isDisabled: boolean;
};
export declare const BaseIcon: ({ className, iconClassName, size, title, children, viewBox, badgeContent, badgeAriaLabel, }: IconProps) => React.JSX.Element;
