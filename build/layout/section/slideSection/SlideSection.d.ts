import React from 'react';
export declare enum SlideSectionPosition {
    DEFAULT = "default",
    REDUCED = "reduced",
    EXPANDED = "expanded"
}
export type SlideSectionProps = Readonly<{
    children: (d: () => void, r: () => void, e: () => void) => React.ReactNode;
    media: React.ReactNode;
    reducedContent?: React.ReactNode;
    onPositionChange?: (p: SlideSectionPosition) => void;
    disabledGestures?: boolean;
    inMotion?: boolean;
}>;
export declare const SlideSection: (props: SlideSectionProps) => JSX.Element;
