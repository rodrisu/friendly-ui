import React from 'react';
import { ButtonProps } from '../../../button';
export type BottomSectionProps = Readonly<{
    children: React.ReactElement<ButtonProps>;
}>;
export declare const BottomSection: ({ children }: BottomSectionProps) => JSX.Element;
