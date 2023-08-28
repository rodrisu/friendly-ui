import React, { PureComponent, RefObject } from 'react';
import { OnChangeParameters } from '../_utils/onChange';
export type CommonFormFields = Readonly<{
    name: string;
    id?: string;
    placeholder?: string;
    maxLength?: number;
    autoCorrect?: 'on' | 'off';
    autoComplete?: 'on' | 'off';
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    required?: boolean;
    title?: string;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}>;
type errorField = string | JSX.Element;
export type TextareaProps = CommonFormFields & Readonly<{
    defaultValue?: string;
    labelledBy?: string;
    onChange?: (obj: OnChangeParameters) => void;
    className?: string;
    errorClassName?: string;
    error?: errorField;
    label?: string;
    focus?: boolean;
    pattern?: string;
    fieldRef?: (textarea: HTMLTextAreaElement) => void;
    focusBorder?: boolean;
    fitContent?: boolean;
    onButtonClick?: (event: React.MouseEvent<HTMLElement>) => void;
    buttonIcon?: JSX.Element;
    buttonTitle?: string;
}>;
export type TextAreaState = {
    value: string;
    defaultValue: string;
    hasFocus: boolean;
};
export declare class Textarea extends PureComponent<TextareaProps, TextAreaState> {
    static defaultProps: Partial<TextareaProps>;
    state: {
        value: string;
        defaultValue: string;
        hasFocus: boolean;
    };
    buttonRef: HTMLButtonElement;
    textareaRef: RefObject<HTMLTextAreaElement>;
    componentDidMount(): void;
    static getDerivedStateFromProps(props: TextareaProps, state: TextAreaState): {
        value: string;
        defaultValue: string;
        hasFocus: boolean;
    };
    componentDidUpdate(prevProps: TextareaProps): void;
    onWrapperClick: () => void;
    onFocus: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    maybeAdaptHeightToContent: () => void;
    onChange: () => void;
    ref: (textarea: HTMLTextAreaElement) => void;
    renderError: () => React.JSX.Element;
    render(): React.JSX.Element;
}
export {};
