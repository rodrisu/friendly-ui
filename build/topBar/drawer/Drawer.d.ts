import React, { PureComponent } from 'react';
export type DrawerProps = Readonly<{
    children: string | JSX.Element;
    className?: string;
    zIndex?: number;
    onOpen?: () => void;
    onClose?: () => void;
    onTransitionEnd?: (open: boolean) => void;
    width?: string;
    open?: boolean;
}>;
export declare class Drawer extends PureComponent<DrawerProps> {
    private contentNode;
    static defaultProps: Partial<DrawerProps>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: DrawerProps): void;
    componentWillUnmount(): void;
    open: () => void;
    close: () => void;
    handleOutsideMouseClick: (e: MouseEvent) => void;
    handleKeydown: (e: KeyboardEvent) => void;
    refContent: (contentNode: HTMLDivElement) => void;
    scrollLock: () => void;
    scrollUnlock: () => void;
    render(): React.JSX.Element;
}
