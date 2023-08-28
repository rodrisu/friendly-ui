import React, { Component } from 'react';
import { ModalProps } from '../modal/Modal';
export declare enum ConfirmationModalStatus {
    WARNING = "warning",
    REMINDER = "reminder"
}
export type ConfirmationModalProps = ModalProps & Readonly<{
    status: ConfirmationModalStatus;
    onConfirm?: () => void;
    confirmLabel?: string;
    confirmIsLoading?: boolean;
}>;
export declare class ConfirmationModal extends Component<ConfirmationModalProps> {
    static defaultProps: Partial<ConfirmationModalProps>;
    render(): React.JSX.Element;
}
