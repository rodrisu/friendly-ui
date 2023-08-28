import React from 'react';
export type MediaContentSectionProps = Readonly<{
    media: JSX.Element;
    title: string;
    content?: string;
    buttonLabel?: string;
    buttonHref?: string | JSX.Element;
    buttonClick?: (event: React.MouseEvent<HTMLElement>) => void;
}>;
/**
 * A specialized section which show some marketing content associated with a picture.
 */
export declare const MediaContentSection: ({ media, title, content, buttonLabel, buttonHref, buttonClick, }: MediaContentSectionProps) => React.JSX.Element;
