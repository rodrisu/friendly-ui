import { PureComponent } from 'react';
import { OnChangeParameters } from '../_utils/onChange';
import { StepperDisplay } from './constants';
export type StepperProps = Readonly<{
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
    display?: StepperDisplay;
    focus?: boolean;
    leftAddon?: JSX.Element;
    disabled?: boolean;
}>;
type StepperState = {
    value: number;
    fontSize?: number;
};
export declare class Stepper extends PureComponent<StepperProps, StepperState> {
    private valueElementRef;
    private containerRef;
    static defaultProps: Partial<StepperProps>;
    filterValue: (value: number, min: number, max: number) => number;
    state: StepperState;
    whileButtonDown: number;
    buttonDownDelay: number;
    constructor(props: StepperProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: StepperProps): void;
    update(newValue: number): void;
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
