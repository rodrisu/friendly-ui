import React from 'react';
export type IllustrationProps = Readonly<{
    title?: string;
}>;
type BaseIllustrationProps = IllustrationProps & Readonly<{
    children: React.ReactNode;
    viewBox?: string;
}>;
export declare const Illustration: ({ children, title, viewBox, }: BaseIllustrationProps) => JSX.Element;
export {};
