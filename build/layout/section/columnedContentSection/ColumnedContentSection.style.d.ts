/// <reference types="react" />
export declare const StyledColumnedContentSection: {
    Wrapper: import("styled-components").StyledComponent<"article", any, {
        backgroundColor?: string;
    }, never>;
    Section: import("styled-components").StyledComponent<(props: Readonly<{
        className?: string;
        contentClassName?: string;
        backgroundStyle?: object;
        tagName?: string;
        role?: string;
        children: import("react").ReactNode | JSX.Element;
        contentSize?: import("../baseSection").SectionContentSize;
        noHorizontalSpacing?: boolean;
    }>) => import("react").JSX.Element, any, {}, never>;
    Header: import("styled-components").StyledComponent<"div", any, {}, never>;
    Title: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    }, "isInverted">;
    TopLink: import("styled-components").StyledComponent<typeof import("../../../button/Button").Button, any, {}, never>;
    Column: import("styled-components").StyledComponent<(props: Readonly<{
        className?: string;
        children?: import("react").ReactNode;
        key?: string;
    }>) => import("react").JSX.Element, any, {}, never>;
    ColumnTitle: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
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
    ColumnContent: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    }, "isInverted">;
    ColumnFooter: import("styled-components").StyledComponent<typeof import("../../../button/Button").Button, any, {}, never>;
    MediaElement: import("styled-components").StyledComponent<"div", any, {}, never>;
    MediaCover: import("styled-components").StyledComponent<"a", any, {}, never>;
    MediaFit: import("styled-components").StyledComponent<"div", any, {}, never>;
};
