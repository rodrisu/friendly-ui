import React from 'react';
export type HelpersProps = Readonly<{
    illustration: JSX.Element;
    content: Readonly<{
        title: string;
        paragraph: string;
        button: string;
    }>;
    onClick: () => void;
}>;
export declare const Helpers: ({ illustration, content, onClick }: HelpersProps) => React.JSX.Element;
