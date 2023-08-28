/// <reference types="react" />
import { ModalProps } from '../modal';
export type SuccessModalProps = ModalProps & Readonly<{
    confirmLabel?: string;
    illustration: JSX.Element;
}>;
export declare const SuccessModal: (props: SuccessModalProps) => JSX.Element;
