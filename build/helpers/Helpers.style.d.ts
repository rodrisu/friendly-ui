/// <reference types="react" />
export declare const StyledHelpers: {
    Container: import("styled-components").StyledComponent<"div", any, {}, never>;
    Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
    Illustration: import("styled-components").StyledComponent<"div", any, {}, never>;
    Content: import("styled-components").StyledComponent<"div", any, {}, never>;
    Title: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    } & {
        as: string;
    }, "as" | "isInverted">;
    Paragraph: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    } & {
        as: string;
    }, "as" | "isInverted">;
};
