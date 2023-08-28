import React, { Component } from 'react';
import { ModalProps } from '../index';
export declare class ModalOpener extends Component<ModalProps> {
    state: {
        modalOpen: boolean;
        modalOpen2: boolean;
    };
    openModal: () => void;
    closeModal: () => void;
    openModal2: () => void;
    closeModal2: () => void;
    render(): React.JSX.Element;
}
