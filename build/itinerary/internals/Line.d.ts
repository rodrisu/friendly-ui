import React from 'react';
import { Lines } from '../Lines';
export type LineProps = Readonly<{
    prevLine?: Lines;
    nextLine?: Lines;
    bullet?: JSX.Element;
}>;
export declare const Line: ({ prevLine, nextLine, bullet }: LineProps) => React.JSX.Element;
