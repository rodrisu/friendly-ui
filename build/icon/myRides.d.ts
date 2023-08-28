import React from 'react';
import { Icon } from '../_utils/icon';
export type MyRidesIconProps = Icon & Readonly<{
    active?: boolean;
}>;
export declare const MyRidesIcon: {
    ({ active, ...props }: MyRidesIconProps): React.JSX.Element;
    defaultProps: {
        active: boolean;
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
