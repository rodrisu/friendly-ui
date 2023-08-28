import React from 'react';
import { ColumnProps } from '../../layout/column';
export type ColumnsProps = Readonly<{
    className?: string;
    children: Array<React.ReactElement<ColumnProps>>;
}>;
/**
 * A parent component for <Column> component.
 * Each <Column> nested inside the parent <Columns> will share the horizontal space and get an equal
 * share of the available horizontal space.
 *
 * Only <Column> are valid children of <Columns>.
 */
export declare const Columns: (props: ColumnsProps) => React.JSX.Element;
