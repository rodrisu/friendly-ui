import React from 'react';
import { Icon } from '../_utils/icon';
export type SearchIconProps = Icon & Readonly<{
    strokeWidth?: string;
}>;
export declare const SearchIcon: {
    ({ strokeWidth, ...props }: SearchIconProps): React.JSX.Element;
    defaultProps: {
        strokeWidth: string;
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
