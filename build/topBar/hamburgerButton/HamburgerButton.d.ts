import React from 'react';
import { A11yProps } from '../../_utils/interfaces';
export type HamburgerButtonProps = A11yProps & Readonly<{
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    open?: boolean;
    className?: string;
}>;
export declare const HamburgerButton: (props: HamburgerButtonProps) => React.JSX.Element;
