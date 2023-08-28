import React from 'react';
export type ReviewProps = Readonly<{
    className?: string;
    isResponse?: boolean;
    title: string;
    text: string;
    formattedDatetime: string;
    isoDatetime: string;
    replyLinkLabel?: string;
    replyLinkHref?: string | JSX.Element;
    replyLinkOnClick?: (event: React.MouseEvent<HTMLElement>) => void;
}>;
export declare const Review: (props: ReviewProps) => React.JSX.Element;
