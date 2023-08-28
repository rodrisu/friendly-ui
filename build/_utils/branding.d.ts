type Color = {
    [propName: string]: string;
};
export declare const color: Color;
export declare const gradientColors: {
    blueGradient: string;
};
type Font = {
    [key: string]: {
        size: string;
        lineHeight: string;
    };
};
type defaultBranding = {
    [key: string]: string;
};
export declare const CDN_FONTS_BASE_URL = "https://cdn.blablacar.com/kairos/assets/build/fonts";
export declare const font: Font;
export declare const fontWeight: defaultBranding;
export declare const space: defaultBranding;
export declare const horizontalSpace: defaultBranding;
export declare const radius: defaultBranding;
export declare enum TransitionDuration {
    BASE = 200,
    FAST = 500
}
export declare const transition: {
    duration: {
        base: string;
        fast: string;
    };
    easing: {
        default: string;
    };
    callbackDelay: number;
};
export declare const delay: {
    timeout: {
        base: string;
    };
    interval: {
        base: string;
    };
};
export declare const componentSizes: {
    timeWidth: string;
    buttonIconSize: string;
    bulletSize: string;
    bulletSizeSmall: string;
    bulletSizeMap: string;
    bulletSizeSearch: string;
    roadWidth: string;
    smallSectionWidth: string;
    largeSectionWidth: string;
    modalTopPadding: string;
    searchOverlayWidth: string;
    headerHeight: {
        small: string;
        large: string;
    };
    headerWidth: {
        small: string;
        large: string;
    };
    drawerWidth: {
        small: string;
        large: string;
    };
};
export declare const modalSize: {
    s: string;
    m: string;
    l: string;
};
export declare const shadow: defaultBranding;
export declare const inputBorderSize: {
    default: string;
    focus: string;
};
export declare const responsiveBreakpoints: {
    small: string;
    isMediaLarge: string;
    isMediaSmall: string;
};
export declare const selectHeight = "52px";
export declare const pxToInteger: (size: string) => number;
export declare const branding: {
    color: Color;
    font: Font;
    fontWeight: defaultBranding;
    space: defaultBranding;
    radius: defaultBranding;
    shadow: defaultBranding;
};
export {};
