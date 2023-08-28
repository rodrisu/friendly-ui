import React from 'react';
export type IllustratedSectionProps = Readonly<{
    children: React.ReactNode;
    className?: string;
    illustration: JSX.Element;
}>;
/**
 * A specialized section which show some content with an illustration.
 */
export declare const IllustratedSection: React.SFC<IllustratedSectionProps>;
