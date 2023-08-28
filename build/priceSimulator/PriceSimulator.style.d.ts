/// <reference types="react" />
export declare const StyledPriceSimulator: {
    Container: import("styled-components").StyledComponent<"div", any, {}, never>;
    Columns: import("styled-components").StyledComponent<"div", any, {}, never>;
    Form: import("styled-components").StyledComponent<"div", any, {}, never>;
    Illustration: import("styled-components").StyledComponent<"div", any, {
        hasDefaultIllustration: boolean;
    }, never>;
    Caption: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    }, "isInverted">;
};
