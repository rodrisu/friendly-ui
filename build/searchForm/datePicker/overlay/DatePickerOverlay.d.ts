import React from 'react';
import { DatePickerProps } from '../../../datePicker';
export type DatePickerOverlayProps = Omit<DatePickerProps, 'numberOfMonths' | 'className' | 'orientation' | 'focus'> & {
    title: string;
    renderDatePickerComponent: (props: DatePickerProps) => JSX.Element;
    className?: string;
};
export declare const DatePickerOverlay: ({ title, renderDatePickerComponent, className, ...props }: DatePickerOverlayProps) => React.JSX.Element;
