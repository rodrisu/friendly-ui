import React, { PureComponent } from 'react';
import { ItemStatus } from '../_internals/item';
import { A11yProps } from '../_utils/interfaces';
import { NormalizeProps } from '../layout/layoutNormalizer';
export declare enum ItemChoiceStyle {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    RECOMMENDED = "recommended"
}
export declare const ItemChoiceStatus: typeof ItemStatus;
export type ItemChoiceProps = A11yProps & NormalizeProps & Readonly<{
    label: string | JSX.Element;
    labelInfo?: React.ReactNode;
    data?: string | JSX.Element;
    dataAriaProps?: A11yProps;
    dataInfo?: string;
    dataStrikeThrough?: boolean;
    leftAddon?: React.ReactNode;
    rightAddon?: React.ReactNode;
    className?: string;
    href?: string | JSX.Element;
    status?: ItemStatus;
    style?: ItemChoiceStyle;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
    onDoneAnimationEnd?: () => void;
    tagLabel?: string;
}>;
export declare class ItemChoice extends PureComponent<ItemChoiceProps> {
    static defaultProps: Partial<ItemChoiceProps>;
    get rightAddon(): React.ReactNode;
    get labelColor(): string;
    render(): React.JSX.Element;
}
