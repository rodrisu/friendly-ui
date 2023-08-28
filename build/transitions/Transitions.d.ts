import React, { PureComponent } from 'react';
export declare enum AnimationType {
    FADE = "fade",
    SLIDE_UP = "slide-up"
}
export type TransitionsProps = Readonly<{
    className?: string;
    children: JSX.Element;
    animationName?: AnimationType;
    delayEnter?: number;
    delayLeave?: number;
    in?: boolean;
    onEntered?: () => void;
}>;
export declare class Transitions extends PureComponent<TransitionsProps> {
    static defaultProps: Partial<TransitionsProps>;
    render(): React.JSX.Element;
}
