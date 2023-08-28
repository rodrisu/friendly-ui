import React from 'react';
import { Icon } from '../_utils/icon';
export type BoostIconProps = Icon & Readonly<{
    noBackground?: boolean;
}>;
export declare const BaseBoostIcon: {
    ({ noBackground, ...props }: BoostIconProps): React.JSX.Element;
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
export declare const BoostIcon: import("styled-components").StyledComponent<{
    ({ noBackground, ...props }: BoostIconProps): React.JSX.Element;
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
}, any, {}, never>;
