/// <reference types="react" />
import { ButtonStatus } from '../../../button';
import { ItemChoice } from '../../../itemChoice';
export declare const Article: import("styled-components").StyledComponent<"article", any, {}, never>;
export declare const Grid: import("styled-components").StyledComponent<"ul", any, {}, never>;
export declare const Col: import("styled-components").StyledComponent<"li", any, {}, never>;
export declare const HighlightSectionElements: {
    Section: import("styled-components").StyledComponent<"section", any, {}, never>;
    Content: import("styled-components").StyledComponent<"div", any, {}, never>;
    Article: import("styled-components").StyledComponent<"article", any, {}, never>;
    Title: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    } & {
        isInverted: boolean;
    }, "isInverted">;
    Item: import("styled-components").StyledComponent<typeof ItemChoice, any, {}, never>;
    Actions: import("styled-components").StyledComponent<"div", any, {}, never>;
    Button: import("styled-components").StyledComponent<typeof import("../../../button/Button").Button, any, {
        status: ButtonStatus.UNSTYLED;
    }, "status">;
};
