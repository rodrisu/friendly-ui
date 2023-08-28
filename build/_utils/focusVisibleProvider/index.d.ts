import React, { ReactNode } from 'react';
export declare const FOCUS_VISIBLE_CSS_CLASS = "focus-visible";
export type FocusVisibleProviderProps = {
    children: ReactNode;
    setGlobalClassName?: boolean;
};
export declare const FocusVisibleContext: React.Context<boolean>;
export declare const FocusVisibleProvider: ({ children, setGlobalClassName, }: FocusVisibleProviderProps) => React.JSX.Element;
