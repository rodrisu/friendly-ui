import React from 'react';
import { Icon } from '../_utils/icon';
export type ColorIconProps = Icon & Readonly<{
    borderColor?: string;
}>;
export declare const ColorIcon: {
    (props: ColorIconProps): React.JSX.Element;
    defaultProps: {
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
