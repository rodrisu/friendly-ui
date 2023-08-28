import React from 'react';
type CountCard = Readonly<{
    title: string;
    description: string;
}>;
export type CountsCardProps = Readonly<{
    cards: ReadonlyArray<CountCard>;
}>;
export declare const CountsCard: ({ cards }: CountsCardProps) => React.JSX.Element;
export {};
