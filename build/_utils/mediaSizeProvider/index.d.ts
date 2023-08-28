import React, { ReactNode } from 'react';
export declare enum MediaSize {
    SMALL = "small",
    LARGE = "large"
}
export type MediaSizeProviderProps = Readonly<{
    children: ReactNode;
    serverSideMediaSize?: MediaSize;
    mediaSizeForTestsOnly?: MediaSize;
}>;
export declare const MediaSizeContext: React.Context<MediaSize>;
export declare const useIsSmallMediaSize: () => boolean;
export declare const useIsLargeMediaSize: () => boolean;
export declare const MediaSizeProvider: (props: MediaSizeProviderProps) => React.JSX.Element;
