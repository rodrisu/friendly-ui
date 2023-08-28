import React from 'react';
import 'wicg-inert';
export type FogProps = Readonly<{
    isLoading?: boolean;
    children: React.ReactNode;
}>;
export declare const Fog: ({ isLoading, children }: FogProps) => React.JSX.Element;
