import React, { ReactNode } from 'react';
export type TitleProps = Readonly<{
    readonly id?: string;
    readonly className?: string;
    readonly children: ReactNode;
    readonly headingLevel?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';
}>;
export declare const Title: ({ id, className, children, headingLevel }: TitleProps) => React.JSX.Element;
