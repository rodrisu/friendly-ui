import React from 'react';
import { Icon } from '../_utils/icon';
export declare enum ChevronIconDirections {
    DOWN = "DOWN",
    UP = "UP",
    LEFT = "LEFT"
}
export type ChevronIconProps = Icon & Readonly<{
    direction?: ChevronIconDirections;
}>;
export declare const ChevronIcon: {
    ({ direction, ...props }: ChevronIconProps): React.JSX.Element;
    defaultProps: {
        direction: any;
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
