import React from 'react';
import { Button } from '../button';
type Picture = Readonly<{
    url: string;
    alt: string;
}>;
type Link = Readonly<{
    label: string;
    url: string;
}>;
type Button = Readonly<{
    label: string;
    onClick: () => void;
}>;
type CTALinks = Array<Link>;
type CTAButtons = Array<Button>;
export type SpecialOfferProps = Readonly<{
    picture: Picture;
    title: string;
    description: string;
    informationLink?: Link;
    actions?: CTALinks | CTAButtons;
}>;
export declare const SpecialOffer: (props: SpecialOfferProps) => React.JSX.Element;
export {};
