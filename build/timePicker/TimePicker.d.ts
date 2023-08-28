import React, { PureComponent } from 'react';
import { OnChangeParameters } from '../_utils/onChange';
/**
 * Returns a date with the time set to 00:00:00
 * e.g. input: Fri Jul 27 2018 10:03:29 GMT-0300 -> Fri Jul 27 2018 00:00:00 GMT-0300
 * @return date Date object
 *
 */
export declare const getTodayDate: () => Date;
export type TimePickerProps = Readonly<{
    name: string;
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    minuteStep?: number;
    renderTime?: (dt: Date) => string;
    onChange?: (obj: OnChangeParameters) => void;
    timeStart?: string;
    focus?: boolean;
}>;
type Steps = {
    [propName: string]: string;
};
type TimeSteps = {
    minuteStep?: number;
    timeStart?: string;
};
type TimePickerState = {
    value: string;
    steps: Steps;
    isFocused: boolean;
};
export declare class TimePicker extends PureComponent<TimePickerProps, TimePickerState> {
    static defaultProps: Partial<TimePickerProps>;
    /**
     * Returns a map of `{timeValue: timeLabel}` used to build the select options.
     * E.g. `{ '00:00': '12:00 AM', '08:00': '8:00 AM', '16:00': '4:00 PM' }`.
     */
    generateTimeSteps: ({ minuteStep, timeStart }: TimeSteps) => Steps;
    referenceDate: Date;
    state: {
        value: string;
        steps: Steps;
        isFocused: boolean;
    };
    selectRef: React.RefObject<HTMLSelectElement>;
    static getDerivedStateFromProps(props: TimePickerProps, state: TimePickerState): {
        value: string;
        steps: Steps;
        isFocused: boolean;
    };
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TimePickerProps): void;
    getDefaultValue(): string;
    onSelectFocus: () => void;
    onSelectBlur: () => void;
    render(): React.JSX.Element;
}
export {};
