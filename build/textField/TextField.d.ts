import React, { InputHTMLAttributes, PureComponent } from 'react';
import { OnChangeParameters } from '../_utils/onChange';
export type textfield = HTMLInputElement | HTMLTextAreaElement;
export declare enum inputTypes {
    TEXT = "text",
    PASSWORD = "password",
    EMAIL = "email",
    NUMBER = "number",
    SEARCH = "search",
    TEL = "tel"
}
export declare enum inputModes {
    NONE = "none",
    TEXT = "text",
    DECIMAL = "decimal",
    NUMERIC = "numeric",
    TEL = "tel",
    SEARCH = "search",
    EMAIL = "email",
    URL = "url"
}
export type CommonFormFields = Readonly<{
    name: string;
    id?: string;
    type?: inputTypes;
    placeholder?: string;
    maxLength?: number;
    autoCorrect?: 'on' | 'off';
    autoComplete?: string;
    spellCheck?: 'true' | 'false';
    disabled?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    required?: boolean;
    title?: string;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}>;
type errorField = string | JSX.Element;
export type TextFieldProps = CommonFormFields & Readonly<{
    defaultValue?: string;
    labelledBy?: string;
    onChange?: (obj: OnChangeParameters) => void;
    onClear?: () => void;
    className?: string;
    errorClassName?: string;
    error?: errorField;
    addon?: JSX.Element;
    label?: string;
    buttonTitle?: string;
    focus?: boolean;
    inputMode?: inputModes;
    pattern?: string;
    inputRef?: (input: textfield) => void;
    format?: (value: string, previousValue: string) => string;
    focusBorder?: boolean;
    loader?: JSX.Element;
    inputAttributes: InputHTMLAttributes<HTMLInputElement>;
}>;
export type TextFieldState = {
    value: string;
    previousValue: string;
    defaultValue: string;
    showPassword: boolean;
    hasFocus: boolean;
};
export declare class TextField extends PureComponent<TextFieldProps, TextFieldState> {
    private input;
    static defaultProps: Partial<TextFieldProps>;
    static INPUT_TYPES: typeof inputTypes;
    static INPUT_MODES: typeof inputModes;
    state: {
        value: string;
        defaultValue: string;
        previousValue: string;
        showPassword: boolean;
        hasFocus: boolean;
    };
    clearButton: HTMLButtonElement;
    componentDidMount(): void;
    static getDerivedStateFromProps(props: TextFieldProps, state: TextFieldState): {
        value: string;
        defaultValue: string;
        previousValue: string;
        showPassword: boolean;
        hasFocus: boolean;
    };
    componentDidUpdate(prevProps: TextFieldProps): void;
    onTextFieldChange: (event: React.ChangeEvent<textfield>) => void;
    onChange: () => void;
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    clearValue: () => void;
    toggleShowPassword: () => void;
    ref: (input: textfield) => void;
    renderError: () => React.JSX.Element;
    render(): React.JSX.Element;
}
export {};
