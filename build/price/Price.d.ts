import React, { PureComponent } from 'react';
import { OnChangeParameters } from '../_utils/onChange';
import { PriceDisplay } from './constants';
export type PriceProps = Readonly<{
    name: string;
    increaseLabel: string;
    decreaseLabel: string;
    title: string;
    className?: string;
    valueClassName?: string;
    value?: number;
    step?: number;
    max?: number;
    min?: number;
    threshold?: Readonly<{
        medium: number;
        high: number;
    }>;
    format?: (value: string | number) => string | number;
    onChange?: (obj: OnChangeParameters) => void;
    display?: PriceDisplay;
    focus?: boolean;
    leftAddon?: JSX.Element;
    disabled?: boolean;
}>;
type PriceState = {
    value: number;
    fontSize?: number;
    isInputActive: boolean;
};
export declare class Price extends PureComponent<PriceProps, PriceState> {
    private valueElementRef;
    private containerRef;
    static defaultProps: Partial<PriceProps>;
    filterValue: (value: number, min: number, max: number) => number;
    state: PriceState;
    whileButtonDown: number;
    buttonDownDelay: number;
    constructor(props: PriceProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: PriceProps): void;
    update(newValue: number): void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputFocus: () => void;
    handleInputBlur: () => void;
    handleFontSize(): void;
    handleButtonDown: (callback: () => void) => () => void;
    clearButtonPressedTimers: () => void;
    handleButtonUp: (callback: () => void) => () => void;
    increment: () => void;
    decrement: () => void;
    setMinimum: () => void;
    setMaximum: () => void;
    getValueColor: () => string;
    createButtonListeners(callback: () => void): {
        onTouchStart: () => void;
        onTouchEnd: () => void;
        onMouseDown?: undefined;
        onClick?: undefined;
    } | {
        onMouseDown: () => void;
        onClick: () => void;
        onTouchStart?: undefined;
        onTouchEnd?: undefined;
    };
    render(): JSX.Element;
}
export {};
