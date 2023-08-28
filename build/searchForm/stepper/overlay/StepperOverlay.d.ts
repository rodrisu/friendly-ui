import React from 'react';
import { StepperProps } from '../../../stepper';
export type StepperOverlayProps = StepperProps & Readonly<{
    itemTitle: string;
}>;
export declare const StepperOverlay: ({ itemTitle, className, ...props }: StepperOverlayProps) => React.JSX.Element;
