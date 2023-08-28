/// <reference types="react" />
export declare const SeaPageElements: {
    Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
    Body: import("styled-components").StyledComponent<"div", any, {}, never>;
    Media: import("styled-components").StyledComponent<"div", any, {
        small: string;
        large: string;
    }, never>;
    Heading: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    } & {
        isInverted: boolean;
    }, "isInverted">;
};
