import React from 'react';
type ParagraphBaseProps = Readonly<{
    className?: string;
    itemProp?: string;
}>;
export type ParagraphSimpleProps = ParagraphBaseProps & Readonly<{
    children: React.ReactNode;
}>;
export type ParagraphExpandableProps = ParagraphBaseProps & Readonly<{
    isExpandable: true;
    expandLabel: string;
    children: string;
}>;
export type ParagraphProps = ParagraphSimpleProps | ParagraphExpandableProps;
export declare function Paragraph(props: ParagraphProps): React.JSX.Element;
export {};
