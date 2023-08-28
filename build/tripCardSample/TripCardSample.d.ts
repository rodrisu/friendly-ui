import React from 'react';
export type TripCardSampleProps = Readonly<{
    departure: string;
    arrival: string;
    price?: string;
    priceLabel?: string;
}>;
export declare const TripCardSample: (props: TripCardSampleProps) => React.JSX.Element;
