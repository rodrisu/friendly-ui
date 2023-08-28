/// <reference types="react" />
export declare const StyledContent: import("styled-components").StyledComponent<"div", any, {
    hasLink: boolean;
}, never>;
export declare const StyledLabel: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
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
    $highlighted?: boolean;
}, "isDisabled" | "isInverted">;
export declare const StyledSubLabel: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
    id?: string;
    className?: string;
    children: import("react").ReactNode;
    itemProp?: string;
    theme: import("styled-components").ThemeProps<any>;
}>) => JSX.Element, any, {
    isInverted?: boolean;
} & {
    $highlighted?: boolean;
}, "isInverted">;
export declare const StyledProximity: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledChevronIcon: import("styled-components").StyledComponent<{
    ({ direction, ...props }: import("../icon/chevronIcon").ChevronIconProps): import("react").JSX.Element;
    defaultProps: {
        direction: any;
        className: string;
        iconClassName: string;
        iconColor: string;
        size: number;
        title: string;
        badgeAriaLabel: string;
        badgeContent: string;
        isDisabled: boolean;
    };
}, any, {}, never>;
