import React from 'react';
export type LoadingPageProps = Readonly<{
    icon?: React.ElementType;
    iconColor?: string;
    iconBackground?: string;
    title?: string;
}>;
export declare const LoadingPage: ({ icon: DisplayedIcon, iconColor, iconBackground, title, }: LoadingPageProps) => React.JSX.Element;
