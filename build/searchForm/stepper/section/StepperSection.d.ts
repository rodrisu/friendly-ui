import React from 'react';
import { StepperProps } from '../../../stepper';
export type StepperSectionProps = StepperProps & Readonly<{
    itemTitle: string;
    confirmLabel: string;
    onClose: () => void;
    onConfirm?: (event: React.MouseEvent<HTMLElement>) => void;
}>;
export declare const StepperSection: ({ itemTitle, className, onClose, confirmLabel, onChange, ...props }: StepperSectionProps) => React.JSX.Element;
