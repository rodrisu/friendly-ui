/// <reference types="react" />
export declare const StyledBanner: import("styled-components").StyledComponent<"section", any, {}, never>;
export declare const Frame: import("styled-components").StyledComponent<"div", any, {}, never>;
/** LAYOUT */
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Media: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Body: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const BannerElements: {
    Content: import("styled-components").StyledComponent<"div", any, {}, never>;
    Media: import("styled-components").StyledComponent<"div", any, {}, never>;
    Body: import("styled-components").StyledComponent<"div", any, {}, never>;
    Heading: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    }, "isInverted">;
    Intro: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    } & {
        isDisabled?: boolean;
    }, "isDisabled" | "isInverted">;
    Frame: import("styled-components").StyledComponent<"div", any, {}, never>;
    Actions: import("styled-components").StyledComponent<"div", any, {}, never>;
};
