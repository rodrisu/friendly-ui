import React from 'react';
import { ButtonProps } from '../button';
export type ButtonGroupProps = Readonly<{
    children: Array<React.ReactElement<ButtonProps>>;
    className?: string;
    isInline?: boolean;
    isReverse?: boolean;
    loadingIndex?: string;
}>;
export declare const ButtonGroup: ({ children, className, isInline, isReverse, loadingIndex, }: ButtonGroupProps) => React.JSX.Element;
