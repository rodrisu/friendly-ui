import * as React from 'react';
import { TransitionDuration } from '../_utils/branding';
export declare enum SlideSwitchTransitionSide {
    TOP = "top",
    RIGHT = "right",
    BOTTOM = "bottom",
    LEFT = "left"
}
export type SlideSwitchTransitionProps = {
    /**
     * Key of the current children used to identify them.
     * When the key changes, the previous children will be animated out and the
     * new ones will be animated in.
     */
    childrenKey: React.Key;
    side?: SlideSwitchTransitionSide;
    transitionDuration?: TransitionDuration;
    children?: React.ReactNode;
};
export declare function SlideSwitchTransition({ childrenKey, side, transitionDuration, children, }: SlideSwitchTransitionProps): React.JSX.Element;
