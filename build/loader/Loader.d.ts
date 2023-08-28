import React, { PureComponent } from 'react';
export declare enum LoaderLayoutMode {
    FULLSCREEN = "fullscreen",
    INLINE = "inline",
    BLOCK = "block"
}
export type LoaderProps = Readonly<{
    className?: string;
    inline?: boolean;
    size?: number;
    done?: boolean;
    layoutMode?: LoaderLayoutMode;
    onDoneAnimationEnd?: () => void;
    loadingAriaLabel?: string;
    loadedAriaLabel?: string;
}>;
export declare class Loader extends PureComponent<LoaderProps> {
    static defaultProps: Partial<LoaderProps>;
    validate: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: LoaderProps): void;
    computeLayoutClass(): "kirk-loader--fullScreen" | "kirk-loader--inline" | "kirk-loader--block";
    render(): React.JSX.Element;
}
