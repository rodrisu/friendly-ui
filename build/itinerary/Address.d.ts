import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { ItineraryItemProps } from './internals/ItineraryItem';
import { ProximityProps } from './Proximity';
export type AddressProps = A11yProps & Omit<ItineraryItemProps, 'children'> & Readonly<{
    label: string;
    subLabel?: string;
    href?: string | JSX.Element;
    proximity?: React.ReactElement<ProximityProps>;
    highlighted?: boolean;
}>;
export declare const Address: ({ prevLine, nextLine, label, subLabel, time, timeSubLabelItem, bullet, href, proximity, highlighted, ...props }: AddressProps) => React.JSX.Element;
