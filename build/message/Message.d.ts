import React from 'react';
export type MessageProps = Readonly<{
    children: string;
    date?: string;
    active?: boolean;
    author?: string | JSX.Element;
    className?: string;
    messageAnnotation?: string;
}>;
export declare const Message: ({ active, children, messageAnnotation, className }: MessageProps) => React.JSX.Element;
