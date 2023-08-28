import React from 'react';
export type EmptyStateProps = Readonly<{
    className?: string;
    illustration: JSX.Element;
    text: string | JSX.Element;
    button?: JSX.Element;
}>;
export declare const EmptyState: ({ className, illustration, text, button }: EmptyStateProps) => React.JSX.Element;
