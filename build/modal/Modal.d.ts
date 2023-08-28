import React, { Component } from 'react';
import { A11yProps } from '../_utils/interfaces';
export declare enum ModalSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    FULLSCREEN = "fullscreen"
}
export type ModalProps = A11yProps & Readonly<{
    onClose: () => void;
    isOpen?: boolean;
    children?: React.ReactNode;
    className?: string;
    modalContentClassName?: string;
    closeOnEsc?: boolean;
    closeOnOutsideClick?: boolean;
    displayCloseButton?: boolean;
    size?: ModalSize;
    displayDimmer?: boolean;
    closeButtonTitle?: string;
    noHorizontalSpacing?: boolean;
    layoutModeEnabled?: boolean;
    isLoading?: boolean;
}>;
export declare class Modal extends Component<ModalProps> {
    private portalNode;
    private contentNode;
    private focusTrap;
    private setModalRef;
    static defaultProps: Partial<ModalProps>;
    state: {
        showFooterBorder: boolean;
    };
    constructor(props: ModalProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ModalProps): void;
    componentWillUnmount(): void;
    setDocumentScroll: (cssValue: string) => void;
    addListeners(): void;
    removeListeners(): void;
    handleOutsideMouseClick: (e: MouseEvent) => void;
    handleKeydown: (event: KeyboardEvent) => void;
    onEntered: () => void;
    onScroll: (e: React.UIEvent<HTMLElement>) => void;
    render(): React.JSX.Element;
}
