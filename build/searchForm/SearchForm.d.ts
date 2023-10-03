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
    disabledVehicle?: boolean;
    initialFrom?: string;
    initialTo?: string;
    initialVehicle?: string;
    autocompleteFromPlaceholder: AutoCompleteProps['placeholder'];
    autocompleteToPlaceholder: AutoCompleteProps['placeholder'];
    autocompleteVehiclePlaceholder: AutoCompleteProps['placeholder'];
    renderAutocompleteFrom: AutoCompleteOverlayProps['renderAutocompleteComponent'];
    renderAutocompleteTo: AutoCompleteOverlayProps['renderAutocompleteComponent'];
    renderAutocompleteVehicle?: AutoCompleteOverlayProps['renderAutocompleteComponent'];
    renderDatePickerComponent?: DatePickerOverlayProps['renderDatePickerComponent'];
    datepickerProps: SearchFormDatePickerProps;
    stepperProps: SearchFormStepperProps;
    priceProps: SearchFormPriceProps;
    submitButtonText?: string;
    submitButtonRef?: React.RefObject<HTMLButtonElement> | null;
    display?: SearchFormDisplay;
    showDateField?: boolean;
    showVehicleField?: boolean;
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
export type SearchFormPriceProps = Readonly<{
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
    PRICE = "PRICE",
    AUTOCOMPLETE_FROM = "AUTOCOMPLETE_FROM",
    AUTOCOMPLETE_TO = "AUTOCOMPLETE_TO",
    AUTOCOMPLETE_VEHICLE = "AUTOCOMPLETE_VEHICLE"
}
export type SearchFormValues = {
    DATEPICKER: string;
    STEPPER: number;
    PRICE: number;
    AUTOCOMPLETE_FROM?: AutocompleteOnChange;
    AUTOCOMPLETE_TO?: AutocompleteOnChange;
    AUTOCOMPLETE_VEHICLE?: AutocompleteOnChange;
};
export declare const SearchForm: ({ className, onSubmit, onChange, initialFrom, initialTo, initialVehicle, disabledFrom, disabledTo, disabledVehicle, autocompleteFromPlaceholder, autocompleteToPlaceholder, autocompleteVehiclePlaceholder, renderAutocompleteFrom, renderAutocompleteTo, renderAutocompleteVehicle, renderDatePickerComponent, datepickerProps, stepperProps, priceProps, submitButtonText, display, showDateField, showVehicleField, submitButtonRef, showInvertButton, addon, }: SearchFormProps) => React.JSX.Element;
