import React from 'react';
export type IllustrationType = {
    small: string;
    large: string;
};
export type SeaPageProps = Readonly<{
    children: React.ReactNode;
    heading: string;
    illustationUrl: IllustrationType;
}>;
export declare const SeaPage: ({ children, heading, illustationUrl }: SeaPageProps) => React.JSX.Element;
