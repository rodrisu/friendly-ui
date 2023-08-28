import React from 'react';
export type CheckboxIconProps = Readonly<{
    isChecked?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
}>;
export declare const CheckboxIcon: ({ isChecked, isLoading, isDisabled, }: CheckboxIconProps) => React.JSX.Element;
