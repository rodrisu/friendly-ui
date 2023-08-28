/// <reference types="node" />
import React, { Component } from 'react';
import '../../_internals/closest';
export type MainContentProps = Readonly<{
    readonly children: React.ReactNode;
    readonly topBarSelector?: string;
    readonly topBarHeight?: string;
    readonly tag?: string;
    readonly onSubmit?: (e: React.FormEvent) => void;
    readonly noValidate?: string;
    readonly method?: string;
}>;
export declare class MainContent extends Component<MainContentProps> {
    mainContentRef: React.RefObject<HTMLDivElement>;
    resizeTimeout: NodeJS.Timeout;
    setContentHeight: (element?: HTMLElement) => void;
    onWindowResize: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
