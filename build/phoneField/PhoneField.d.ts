import React, { PureComponent } from 'react';
import { A11yProps } from '../_utils/interfaces';
import { OnChangeParameters } from '../_utils/onChange';
type MappedCountryPhoneData = {
    value: string;
    label: string;
};
export type PhoneFieldCustomCountryNames = {
    [key: string]: string;
};
export declare enum FIELDS {
    PHONENUMBER = "phoneNumber",
    PHONEREGION = "phoneRegion"
}
export type PhoneFieldOnChangeParameters = {
    name: string;
    value: {
        [FIELDS.PHONENUMBER]: string;
        [FIELDS.PHONEREGION]: string;
        phonePrefix: string;
        completePhoneNumber: string;
    };
};
type errorField = string | JSX.Element;
export type PhoneFieldProps = A11yProps & Readonly<{
    name: string;
    onChange: (obj: PhoneFieldOnChangeParameters) => void;
    className?: string;
    innerWrapperClassName?: string;
    selectFieldLabel?: string;
    textFieldTitle?: string;
    textFieldPlaceholder?: string;
    defaultRegionValue?: string;
    defaultPhoneValue?: string;
    countryWhitelist?: Array<string>;
    customCountryNames?: PhoneFieldCustomCountryNames;
    isInline?: boolean;
    focus?: boolean;
    selectAutoFocus?: boolean;
    error?: errorField;
}>;
type PhoneFieldState = {
    countryData: Array<MappedCountryPhoneData>;
    countryWhitelist: Array<string>;
    phonePrefix: string;
    completePhoneNumber: string;
    [key: string]: any;
};
/**
 * TODO: BBCSPA-3355 Fix A11y issues on label and error state
 */
export declare class PhoneField extends PureComponent<PhoneFieldProps, PhoneFieldState> {
    private ref;
    constructor(props: PhoneFieldProps);
    static defaultProps: Partial<PhoneFieldProps>;
    state: {
        countryData: MappedCountryPhoneData[];
        countryWhitelist: string[];
        phoneNumber: string;
        phoneRegion: string;
        phonePrefix: string;
        completePhoneNumber: string;
        hasFocus: boolean;
    };
    handleChange: ({ name, value }: OnChangeParameters) => void;
    static getDerivedStateFromProps(props: PhoneFieldProps, state: PhoneFieldState): {
        countryData: MappedCountryPhoneData[];
        countryWhitelist: string[];
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: PhoneFieldProps): void;
    onFocus: () => void;
    onBlur: () => void;
    render(): React.JSX.Element;
}
export {};
