import React from 'react';
import { A11yProps } from '../../_utils/interfaces';
import { Button } from '../../button/Button';
import { NormalizeProps } from '../../layout/layoutNormalizer';
import { TextDisplayType } from '../../text';
export declare enum ItemStatus {
    DEFAULT = "default",
    LOADING = "loading",
    CHECKED = "checked"
}
export type ItemProps = A11yProps & NormalizeProps & Readonly<{
    chevron?: boolean;
    className?: string;
    href?: string | JSX.Element;
    highlighted?: boolean;
    isClickable?: boolean;
    hasClickableColorRules?: boolean;
    isWrappable?: boolean;
    leftTitle?: React.ReactNode;
    leftTitleButtonAddon?: React.ReactElement<Button>;
    leftTitleDisplay?: TextDisplayType;
    leftTitleColor?: string;
    leftBody?: string | React.ReactNode;
    leftBodyDisplay?: TextDisplayType;
    leftBodyColor?: string;
    leftBodyAnnotation?: React.ReactNode;
    leftBodyAnnotationDisplay?: TextDisplayType;
    leftBodyAnnotationColor?: string;
    leftAddon?: React.ReactNode;
    rightTitle?: string | JSX.Element;
    rightTitleDisplay?: TextDisplayType;
    rightTitleStrikeThrough?: boolean;
    rightTitleAriaProps?: A11yProps;
    rightTitleColor?: string;
    rightTitleAddon?: JSX.Element;
    rightBody?: React.ReactNode;
    rightBodyDisplay?: TextDisplayType;
    rightBodyStrikeThrough?: boolean;
    rightBodyAriaProps?: A11yProps;
    rightBodyColor?: string;
    rightAddon?: React.ReactNode;
    tag?: JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
    hideHoverBackground?: boolean;
    disabled?: boolean;
    tagLabel?: string;
}>;
export declare const Item: (props: ItemProps) => React.JSX.Element;
