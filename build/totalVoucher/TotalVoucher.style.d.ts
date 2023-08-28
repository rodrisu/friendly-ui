/// <reference types="react" />
import { ItemAction } from '../itemAction';
export declare const StyledTotalVoucher: {
    Container: import("styled-components").StyledComponent<"div", any, {}, never>;
    Card: import("styled-components").StyledComponent<({ className, children }: Readonly<{
        className?: string;
        children?: import("react").ReactNode;
    }>) => import("react").JSX.Element, any, {}, never>;
    Title: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    }, "isInverted">;
    SubTitle: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    }, "isInverted">;
    Terms: import("styled-components").StyledComponent<typeof ItemAction, any, {}, never>;
    StepsTitle: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
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
    Steps: import("styled-components").StyledComponent<"ul", any, {}, never>;
    Button: import("styled-components").StyledComponent<"div", any, {}, never>;
};
