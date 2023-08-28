import React, { PureComponent } from 'react';
import { A11yProps } from '../_utils/interfaces';
export declare enum ButtonStatus {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    WARNING = "warning",
    FACEBOOK = "facebook",
    VKONTAKTE = "vkontakte",
    UNSTYLED = "unstyled",
    LOADING = "loading",
    CHECKED = "checked"
}
export type ButtonProps = A11yProps & Readonly<{
    children: string | number | React.ReactNode;
    type?: string;
    href?: string | JSX.Element;
    className?: string;
    status?: ButtonStatus;
    focus?: boolean;
    isBubble?: boolean;
    shadowed?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseUp?: (event: React.MouseEvent<HTMLElement>) => void;
    onTouchStart?: (event: React.TouchEvent<HTMLElement>) => void;
    onTouchEnd?: (event: React.TouchEvent<HTMLElement>) => void;
    onDoneAnimationEnd?: () => void;
    disabled?: boolean;
    index?: string;
    buttonRef?: (button: HTMLButtonElement) => void;
    target?: HTMLLinkElement['target'];
    rel?: HTMLLinkElement['rel'];
}>;
export type ButtonState = Readonly<{
    value: {
        name: string;
        value: string;
    };
}>;
type ButtonActionEvents = React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement> | React.FocusEventHandler<HTMLElement>;
type functionEvent = (event: ButtonActionEvents) => void;
export declare const eventHandler: (componentEvent: functionEvent, childEvent: functionEvent) => (event: ButtonActionEvents) => void;
export declare class Button extends PureComponent<ButtonProps, ButtonState> {
    private button;
    static defaultProps: Partial<ButtonProps>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ButtonProps): void;
    ref: (button: HTMLButtonElement) => void;
    render(): React.FunctionComponentElement<{
        id?: string;
        title?: string;
        role?: string;
        tabIndex?: number;
        'aria-controls'?: string;
        'aria-describedby'?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        target?: string;
        rel?: string;
        ref?: (button: HTMLButtonElement) => void;
        href?: string;
        type?: string;
        onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void;
        onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void;
        onMouseDown?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        onMouseUp?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        onTouchStart?: (event: React.TouchEvent<HTMLElement>) => void;
        onTouchEnd?: (event: React.TouchEvent<HTMLElement>) => void;
        disabled?: boolean;
        index?: string;
        className: string;
    }>;
}
export {};
