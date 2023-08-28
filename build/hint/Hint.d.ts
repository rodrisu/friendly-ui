import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { HintBubblePosition } from './HintBubble';
export type HintProps = A11yProps & Readonly<{
    children: (a11yAttrs: A11yProps) => React.ReactNode;
    mainTitle: string;
    closeButtonTitle?: string;
    description?: string;
    position?: HintBubblePosition;
    className?: string;
    onClose?: () => void;
    hidden?: boolean;
}>;
export declare const Hint: (props: HintProps) => JSX.Element;
