import React from 'react';
import { A11yProps } from '../_utils/interfaces';
export type User = {
    avatarUrl: string;
    firstName: string;
    rating?: string;
    isIdChecked?: boolean;
};
export type Driver = User & {
    subText?: string;
};
type Flags = {
    ladiesOnly?: boolean;
    aloneInTheBack?: boolean;
    maxTwo?: boolean;
    autoApproval?: boolean;
};
type FlagTitles = {
    ladiesOnly?: string;
    aloneInTheBack?: string;
    maxTwo?: string;
    autoApproval?: string;
};
export type TripCardProps = A11yProps & Readonly<{
    href: string | JSX.Element;
    itinerary: JSX.Element;
    driver?: Driver;
    passengers?: Array<User>;
    originalPrice?: {
        label: string;
        value: string;
    };
    price?: string;
    flags?: Flags;
    titles?: FlagTitles;
    className?: string;
    statusInformation?: {
        icon: JSX.Element;
        text: string;
        highlighted?: boolean;
    };
    mainTitle?: string;
    tag?: string;
    subHeader?: string;
}>;
export declare const TripCard: (props: TripCardProps) => React.JSX.Element;
export {};
