import React from 'react';
export type MediaSectionProps = Readonly<{
    className?: string;
    role?: string;
    children: React.ReactNode;
}>;
/**
 * The media section: Renders a fullscreen div without margins on small devices
 * and a standard sized "section" on large ones
 */
export declare const MediaSection: (props: MediaSectionProps) => React.JSX.Element;
