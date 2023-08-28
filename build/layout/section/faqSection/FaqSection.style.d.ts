/// <reference types="react" />
export declare const StyledFaqSection: {
    Section: import("styled-components").StyledComponent<(props: Readonly<{
        className?: string;
        contentClassName?: string;
        backgroundStyle?: object;
        tagName?: string;
        role?: string;
        children: import("react").ReactNode | JSX.Element;
        contentSize?: import("../baseSection/BaseSection").SectionContentSize;
        noHorizontalSpacing?: boolean;
    }>) => import("react").JSX.Element, any, {}, never>;
    List: import("styled-components").StyledComponent<"ul", any, {}, never>;
    ListItem: import("styled-components").StyledComponent<"li", any, {}, never>;
    ButtonWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
    Title: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    } & Readonly<{
        hasHorizontalSpacing?: boolean;
        noHorizontalSpacing?: boolean;
    }>, "isInverted">;
    Question: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    } & {
        isDisabled?: boolean;
    } & Readonly<{
        hasHorizontalSpacing?: boolean;
        noHorizontalSpacing?: boolean;
    }>, "isDisabled" | "isInverted">;
};
