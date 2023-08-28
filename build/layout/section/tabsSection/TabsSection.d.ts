import React from 'react';
import { TabsProps } from '../../../tabs';
export type TabsSectionProps = Readonly<{
    className?: string;
    tabsProps: TabsProps;
}>;
/**
 * A specialized section based on the Tabs component.
 * The tabs section will visually separate (i.e. section) the page horizontally
 * with a line between the tabs and their panels.
 *
 * If you need the non full-width tabs (to use a in a multi column layout), use the <Tabs> widget
 * directly instead.
 */
export declare const TabsSection: (props: TabsSectionProps) => React.JSX.Element;
