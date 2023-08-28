import React from 'react';
export type ColumnProps = Readonly<{
    className?: string;
    children?: React.ReactNode;
    key?: string;
}>;
/**
 * A child component for <Columns> parent component.
 * See <Columns> component for details.
 */
export declare const Column: (props: ColumnProps) => React.JSX.Element;
