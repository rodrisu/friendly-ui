/// <reference types="react" />
import { ItemAction } from '../itemAction';
export declare const StyledBlaBlaCarDaily: {
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
    }, "isInverted">;
    Paragraph: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    }, "isInverted">;
    Link: import("styled-components").StyledComponent<typeof ItemAction, any, {}, never>;
};
