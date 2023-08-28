/// <reference types="react" />
export declare const StyledVideoSection: {
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
    Video: import("styled-components").StyledComponent<"video", any, {}, never>;
    Text: import("styled-components").StyledComponent<"div", any, {}, never>;
};
