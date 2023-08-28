import React from 'react';
import { IconProps } from '../icon/BaseIcon';
export declare enum status {
    ON = "on",
    OFF = "off",
    DEFAULT = "default"
}
export type StatusIconProps = IconProps & Readonly<{
    status?: status;
}>;
export type IconPropsWithStatus = Omit<StatusIconProps, 'children'>;
export declare const StatusIcon: {
    (props: StatusIconProps): React.JSX.Element;
    defaultProps: {
        status: status;
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
