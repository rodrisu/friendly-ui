import React from 'react';
import { DatePickerProps } from '../../../datePicker';
export type DatePickerSectionProps = Omit<DatePickerProps, 'className' | 'orientation'> & {
    title: string;
    onClose: () => void;
    renderDatePickerComponent: (props: DatePickerProps) => JSX.Element;
    className?: string;
};
export declare const DatePickerSection: ({ title, onClose, renderDatePickerComponent, className, ...props }: DatePickerSectionProps) => React.JSX.Element;
