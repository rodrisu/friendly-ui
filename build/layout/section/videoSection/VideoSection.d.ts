import React from 'react';
export type VideoSectionProps = Readonly<{
    title: string;
    sources: Array<HTMLSourceElement>;
    children: React.ReactNode;
    className?: string;
}>;
/**
 * A specialized section which shows a tutorial video alongside some descriptive content.
 */
export declare const VideoSection: React.SFC<VideoSectionProps>;
