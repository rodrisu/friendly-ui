import React from 'react';
import { Icon } from '../_utils/icon';
export type MeetingPointIconProps = Icon & Readonly<{
    active?: boolean;
    shadowed?: boolean;
}>;
export declare const MeetingPointIcon: {
    ({ active, shadowed, ...props }: MeetingPointIconProps): React.JSX.Element;
    defaultProps: {
        active: boolean;
        shadowed: boolean;
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
