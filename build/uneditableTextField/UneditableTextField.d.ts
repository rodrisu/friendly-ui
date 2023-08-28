import React from 'react';
export type UneditableTextFieldProps = Readonly<{
    children: JSX.Element | string;
    className?: string;
    addOn?: JSX.Element;
    ellipsis?: boolean;
    isPlaceholder?: boolean;
}>;
export declare const UneditableTextField: ({ children, addOn, ellipsis, isPlaceholder, className, }: UneditableTextFieldProps) => React.JSX.Element;
