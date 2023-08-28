import React from 'react';
import { A11yProps } from '../../_utils/interfaces';
export type DropdownButtonProps = A11yProps & Readonly<{
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    children: React.ReactNode;
    open?: boolean;
    className?: string;
    iconPosition?: 'left' | 'right';
}>;
export declare const DropdownButton: (props: DropdownButtonProps) => React.JSX.Element;
