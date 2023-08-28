import React from 'react';
import { Icon } from '../_utils/icon';
export type PinIconProps = Icon & Readonly<{
    bgColor?: string;
    strokeColor?: string;
}>;
export declare const PinIcon: {
    ({ bgColor, strokeColor, isDisabled, ...props }: PinIconProps): React.JSX.Element;
    defaultProps: {
        bgColor: string;
        strokeColor: string;
        className: string;
        iconClassName: string;
        iconColor: string;
        size: number;
        title: string;
        badgeAriaLabel: string;
        badgeContent: string;
        isDisabled: boolean;
    };
};
