/// <reference types="react" />
declare const StyledText: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
    id?: string;
    className?: string;
    children: import("react").ReactNode;
    itemProp?: string;
    theme: import("styled-components").ThemeProps<any>;
}>) => JSX.Element, any, {
    isInverted?: boolean;
}, "isInverted">;
export { StyledText as Text };
