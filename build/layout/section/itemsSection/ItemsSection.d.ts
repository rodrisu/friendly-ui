import React from 'react';
import { ItemInfoProps } from '../../../itemInfo';
export type ItemsSectionProps = Readonly<{
    children: Array<React.ReactElement<ItemInfoProps>>;
    className?: string;
    tag?: JSX.Element;
}>;
/**
 * Items Section: display a list of items in a display: flex.
 * Use with two items.
 */
export declare const ItemsSection: (props: ItemsSectionProps) => React.JSX.Element;
