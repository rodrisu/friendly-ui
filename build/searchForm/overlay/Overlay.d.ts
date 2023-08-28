import React from 'react';
type OverlayProps = {
    closeOnBlur: () => void;
    shouldDisplay: boolean;
    children: React.ReactNode;
    className: string;
};
export declare const Overlay: ({ closeOnBlur, shouldDisplay, children, className }: OverlayProps) => React.JSX.Element;
export {};
