import React from 'react';
export type FaqItemProps = {
    question: string;
    answer: string;
};
export type FaqSectionProps = Readonly<{
    className?: string;
    mainTitle?: string;
    items: Array<FaqItemProps>;
    expandLabel: string;
    buttonLabel?: string;
    buttonHref?: string | JSX.Element;
}>;
/**
 * A specialized section with multiple expandable paragraphs with Questions & Answers.
 */
export declare const FaqSection: (props: FaqSectionProps) => React.JSX.Element;
