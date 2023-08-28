import React from 'react';
import { AutocompleteOnChange, AutoCompleteProps } from '../autoComplete';
import { AutoCompleteOverlayProps } from './autoComplete/overlay';
import { DatePickerOverlayProps } from './datePicker/overlay';
export declare enum SearchFormDisplay {
    AUTO = "auto",
    SMALL = "small",
    LARGE = "large"
}
export type SearchFormProps = Readonly<{
    className?: string;
    onSubmit: (formValues: SearchFormValues) => void;
    onChange?: (formValues: SearchFormValues) => void;
    disabledFrom?: boolean;
    disabledTo?: boolean;
    initialFrom?: string;
    initialTo?: string;
    autocompleteFromPlaceholder: AutoCompleteProps['placeholder'];
    autocompleteToPlaceholder: AutoCompleteProps['placeholder'];
    renderAutocompleteFrom: AutoCompleteOverlayProps['renderAutocompleteComponent'];
    renderAutocompleteTo: AutoCompleteOverlayProps['renderAutocompleteComponent'];
    renderDatePickerComponent?: DatePickerOverlayProps['renderDatePickerComponent'];
    datepickerProps: SearchFormDatePickerProps;
    stepperProps: SearchFormStepperProps;
    submitButtonText?: string;
    submitButtonRef?: React.RefObject<HTMLButtonElement> | null;
    display?: SearchFormDisplay;
    showDateField?: boolean;
    showInvertButton?: boolean;
    addon?: JSX.Element;
}>;
export type SearchFormDatePickerProps = Readonly<{
    defaultValue: string;
    format?: (value: string) => string;
}>;
export type SearchFormStepperProps = Readonly<{
    min: number;
    max: number;
    defaultValue: number;
    increaseLabel: string;
    decreaseLabel: string;
    title: string;
    confirmLabel: string;
    format?: (value: number) => string;
}>;
export declare enum SearchFormElements {
    DATEPICKER = "DATEPICKER",
    STEPPER = "STEPPER",
    AUTOCOMPLETE_FROM = "AUTOCOMPLETE_FROM",
    AUTOCOMPLETE_TO = "AUTOCOMPLETE_TO"
}
export type SearchFormValues = {
    DATEPICKER: string;
    STEPPER: number;
    AUTOCOMPLETE_FROM?: AutocompleteOnChange;
    AUTOCOMPLETE_TO?: AutocompleteOnChange;
};
export declare const SearchForm: ({ className, onSubmit, onChange, initialFrom, initialTo, disabledFrom, disabledTo, autocompleteFromPlaceholder, autocompleteToPlaceholder, renderAutocompleteFrom, renderAutocompleteTo, renderDatePickerComponent, datepickerProps, stepperProps, submitButtonText, display, showDateField, submitButtonRef, showInvertButton, addon, }: SearchFormProps) => React.JSX.Element;
