import React from 'react';
export type DisclaimerProps = Readonly<{
    icon?: React.ReactNode;
    children: string | JSX.Element;
    isCaption?: boolean;
    deprecatedHelpUrl?: string;
}>;
export declare const Disclaimer: ({ icon, isCaption, children, deprecatedHelpUrl, }: DisclaimerProps) => React.JSX.Element;
