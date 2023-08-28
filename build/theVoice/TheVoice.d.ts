import React, { ReactNode } from 'react';
export type TheVoiceProps = Readonly<{
    children: ReactNode;
    id?: string;
    className?: string;
    isInverted?: boolean;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
}>;
export declare const TheVoice: ({ id, className, children, isInverted, as }: TheVoiceProps) => React.JSX.Element;
