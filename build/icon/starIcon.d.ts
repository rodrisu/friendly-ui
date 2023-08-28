import React from 'react';
import { Icon } from '../_utils/icon';
export type StarIconProps = Icon & Readonly<{
    bgColor?: string;
    fill?: number;
}>;
export declare const StarIcon: {
    ({ bgColor, fill, ...props }: StarIconProps): React.JSX.Element;
    defaultProps: {
        bgColor: string;
        fill: number;
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
