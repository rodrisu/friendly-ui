import React from 'react';
export type SearchRecapProps = Readonly<{
    className?: string;
    from?: string;
    to?: string;
    info?: string;
}>;
export declare const SearchRecap: ({ className, from, to, info }: SearchRecapProps) => React.JSX.Element;
