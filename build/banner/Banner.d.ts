import React from 'react';
import { QrCardProps } from '../qrCard';
type Copy = Readonly<{
    heading: string;
    paragraph?: string;
}>;
type CTALinks = Array<JSX.Element>;
type CTAButtons = Array<JSX.Element>;
export type BannerProps = Readonly<{
    copy: Copy;
    actions?: CTALinks | CTAButtons;
    qrcode?: QrCardProps;
}>;
export declare const Banner: ({ copy, actions, qrcode }: BannerProps) => React.JSX.Element;
export {};
