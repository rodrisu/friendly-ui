import React, { PureComponent, RefObject } from 'react';
import { Icon } from '../_utils/icon';
export declare enum TabStatus {
    SCROLLABLE = "scrollable",
    FIXED = "fixed"
}
export type Tab = {
    readonly id: string;
    readonly label: string;
    readonly icon?: React.ReactElement<Icon>;
    readonly secondLine?: string;
    readonly showIconOnly?: boolean;
    readonly panelContent: JSX.Element;
    readonly badgeContent?: string;
    readonly badgeAriaLabel?: string;
};
export type TabsProps = Readonly<{
    tabs: Array<Tab>;
    activeTabId: string;
    onChange?: Function;
    status?: TabStatus;
    className?: string;
    tabsClassName?: string;
}>;
type TabsState = {
    activeTabId: string;
    tabIdToRefs: Map<string, RefObject<HTMLButtonElement>>;
};
/**
 * A basic Tabs component made of:
 *  - a list of selectable tabs (only one can be selected at a time)
 *  - one panel: its content is controlled by the selected tab
 *
 * It follows most of the ARIA authoring recommendations for a Tabs component from:
 * https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
 * In particular, it implements most of the recommended shortcuts, role structure and is using
 * a roving tabindex for the focus management.
 */
export declare class Tabs extends PureComponent<TabsProps, TabsState> {
    static defaultProps: Partial<TabsProps>;
    state: TabsState;
    highlightRef: RefObject<HTMLDivElement>;
    tabsGroupRef: RefObject<HTMLDivElement>;
    static STATUS: typeof TabStatus;
    handleTabClicked: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleTabKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    moveHighlight: (activeTabId: string) => void;
    activateTabById: (activeTabId: string) => void;
    componentDidUpdate(prevProps: TabsProps): void;
    componentDidMount(): void;
    render(): React.JSX.Element;
}
export {};
