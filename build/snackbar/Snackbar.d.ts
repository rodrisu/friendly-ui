import React, { PureComponent } from 'react';
export type SnackbarProps = Readonly<{
    close: () => void;
    isOpen: boolean;
    className?: string;
    extraClassName?: string;
    children: React.ReactNode;
}>;
export declare class Snackbar extends PureComponent<SnackbarProps> {
    private portalNode;
    static defaultProps: Partial<SnackbarProps>;
    constructor(props: SnackbarProps);
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
