import React from 'react';
import { A11yProps } from '../_utils/interfaces';
export type GripProps = A11yProps & Readonly<{
    children?: React.ReactNode;
    onSlideUp: () => void;
    onSlideDown: () => void;
    onTouchMove?: (offset: number) => void;
    onTouchEnd?: () => void;
    className?: string;
    disabled?: boolean;
}>;
export declare const SLIDE_OFFSET = 50;
export declare const touchEndListener: (clientY: number, fingerYPosition: React.MutableRefObject<number>, resetFingerYPosition: () => void, props: GripProps) => void;
export declare const touchMoveListener: (clientY: number, fingerYPosition: React.MutableRefObject<number>, props: GripProps) => void;
export declare const Grip: (props: GripProps) => JSX.Element;
