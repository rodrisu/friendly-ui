import React, { PureComponent } from 'react';
import { ItemStatus } from '../_internals/item';
import { A11yProps } from '../_utils/interfaces';
import { NormalizeProps } from '../layout/layoutNormalizer';
export declare const ItemActionStatus: typeof ItemStatus;
export type ItemActionProps = NormalizeProps & A11yProps & Readonly<{
    action: string;
    subLabel?: string;
    highlighted?: boolean;
    tag?: JSX.Element;
    className?: string;
    href?: string | JSX.Element;
    status?: ItemStatus;
    leftAddon?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
    onDoneAnimationEnd?: () => void;
    hideHoverBackground?: boolean;
}>;
export declare class ItemAction extends PureComponent<ItemActionProps> {
    static defaultProps: Partial<ItemActionProps>;
    static STATUS: typeof ItemStatus;
    render(): React.JSX.Element;
}
