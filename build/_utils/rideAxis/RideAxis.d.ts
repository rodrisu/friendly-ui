import React from 'react';
export type RideAxisProps = Readonly<{
    from?: string;
    to?: string;
}>;
export declare const RideAxis: ({ from, to, ...props }: RideAxisProps) => React.JSX.Element;
