/// <reference types="react" />
export declare const TextTitle: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
    id?: string; /**
     * Ligthen the text color to emphasis on disabled state
     * */
    className?: string;
    children: import("react").ReactNode;
    itemProp?: string;
    theme: import("styled-components").ThemeProps<any>;
}>) => JSX.Element, any, {
    isInverted?: boolean;
} & {
    isDisabled?: boolean;
}, "isDisabled" | "isInverted">;
