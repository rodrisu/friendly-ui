import React from 'react';
import { Icon } from '../_utils/icon';
export type EyeIconProps = Icon & Readonly<{
    off?: boolean;
}>;
export declare const EyeIcon: {
    ({ off, ...props }: EyeIconProps): React.JSX.Element;
    defaultProps: {
        off: boolean;
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
