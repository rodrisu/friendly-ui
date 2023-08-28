import React from 'react';
export declare enum SpacingDividerSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
type StyledSpacingDividerProps = Readonly<{
    size: SpacingDividerSize;
}>;
export type SpacingDividerProps = Readonly<{
    size?: StyledSpacingDividerProps['size'];
}>;
export declare const SpacingDivider: ({ size }: SpacingDividerProps) => React.JSX.Element;
export {};
