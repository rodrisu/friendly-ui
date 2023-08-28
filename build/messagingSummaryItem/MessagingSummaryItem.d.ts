import React from 'react';
import { NormalizeProps } from '../layout/layoutNormalizer';
export type MessagingSummaryItemProps = NormalizeProps & Readonly<{
    className?: string;
    url: string | JSX.Element;
    pictureUrl: string;
    label: string;
    subLabel: string | JSX.Element;
    timeLabel: string | JSX.Element;
    hasUnreadMessages: boolean;
}>;
export declare const MessagingSummaryItem: ({ className, url, pictureUrl, label, subLabel, timeLabel, hasUnreadMessages, hasHorizontalSpacing, }: MessagingSummaryItemProps) => React.JSX.Element;
