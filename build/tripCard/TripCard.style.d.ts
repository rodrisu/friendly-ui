/// <reference types="react" />
export declare const StyledTripCard: import("styled-components").StyledComponent<({ className, children }: Readonly<{
    className?: string;
    children?: import("react").ReactNode;
}>) => import("react").JSX.Element, any, {}, never>;
export declare const StyledPrice: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
    id?: string;
    className?: string;
    children: import("react").ReactNode;
    itemProp?: string;
    theme: import("styled-components").ThemeProps<any>;
}>) => JSX.Element, any, {
    isInverted?: boolean;
} & {
    isDisabled?: boolean;
} & {
    $hasDiscount?: boolean;
}, "isDisabled" | "isInverted">;
export declare const StyledCardTag: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledOriginalPrice: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
    id?: string;
    className?: string;
    children: import("react").ReactNode;
    itemProp?: string;
    theme: import("styled-components").ThemeProps<any>;
}>) => JSX.Element, any, {
    isInverted?: boolean;
}, "isInverted">;
export declare const StyledTripCardContainer: import("styled-components").StyledComponent<"li", any, {
    noHorizontalSpacing: boolean;
}, never>;
