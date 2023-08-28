import React from 'react';
import { Icon } from '../_utils/icon';
export type ArrowIconProps = Icon & Readonly<{
    right?: boolean;
}>;
export declare const ArrowIcon: {
    ({ right, ...props }: ArrowIconProps): React.JSX.Element;
    defaultProps: {
        right: boolean;
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
