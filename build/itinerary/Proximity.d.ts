import React from 'react';
export declare enum Distances {
    NONE = "NONE",
    CLOSE = "CLOSE",
    MIDDLE = "MIDDLE",
    FAR = "FAR"
}
export declare enum ProximityDisplay {
    PILLS = "PILLS",
    LABEL = "LABEL"
}
export type ProximityProps = Readonly<{
    className?: string;
    value: Distances;
    title?: string;
    display?: ProximityDisplay;
}>;
export declare const Proximity: ({ value, title, className, display, }: ProximityProps) => React.JSX.Element;
