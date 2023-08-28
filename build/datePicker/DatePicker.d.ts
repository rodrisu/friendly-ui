import React, { PureComponent } from 'react';
import { CaptionElementProps, DayModifiers, NavbarElementProps } from 'react-day-picker';
import { OnChangeParameters } from '../_utils/onChange';
export declare enum DatePickerOrientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
export type DatePickerProps = Readonly<{
    name: string;
    locale?: string;
    weekdaysShort?: Array<string>;
    weekdaysLong?: Array<string>;
    months?: Array<string>;
    onChange?: (obj: OnChangeParameters) => void;
    initialDate?: Date;
    initialMonth?: Date;
    className?: string;
    numberOfMonths?: number;
    orientation?: DatePickerOrientation;
    isOutsideRange?: (day: Date) => boolean;
    fromMonth?: Date;
    toMonth?: Date;
    firstDayOfWeek?: number;
    stickyPositionTop?: number;
    focus?: boolean;
}>;
export type DatePickerState = {
    date: Date;
};
export declare class DatePicker extends PureComponent<DatePickerProps, DatePickerState> {
    static defaultProps: Partial<DatePickerProps>;
    state: {
        date: Date;
    };
    dayPickerContainer: React.RefObject<HTMLDivElement>;
    formatMonthTitle: (date: Date) => string;
    onDayClick: (date: Date, modifiers: DayModifiers) => void;
    renderNavbar: (props: NavbarElementProps) => React.JSX.Element;
    renderCaption: (props: CaptionElementProps) => React.JSX.Element;
    renderDay: (day: Date) => React.JSX.Element;
    scrollToSelectedMonth: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): React.JSX.Element;
}
