/// <reference types="react" />
import { ItemChoice } from '../../../itemChoice';
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const MainTitle: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
    id?: string;
    className?: string;
    children: import("react").ReactNode;
    itemProp?: string;
    theme: import("styled-components").ThemeProps<any>;
}>) => JSX.Element, any, {
    isInverted?: boolean;
}, "isInverted">;
export declare const SubTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ListWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const List: import("styled-components").StyledComponent<(props: import("../../../itemsList").ItemsListProps) => import("react").JSX.Element, any, {}, never>;
export declare const ListItemChoice: import("styled-components").StyledComponent<typeof ItemChoice, any, {
    hidden: boolean;
}, never>;
export declare const Toggle: import("styled-components").StyledComponent<typeof import("../../../button/Button").Button, any, {}, never>;
export declare const StyledColumnedItemsListSection: {
    Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
    MainTitle: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    }, "isInverted">;
    SubTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
    ListWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
    List: import("styled-components").StyledComponent<(props: import("../../../itemsList").ItemsListProps) => import("react").JSX.Element, any, {}, never>;
    ListItemChoice: import("styled-components").StyledComponent<typeof ItemChoice, any, {
        hidden: boolean;
    }, never>;
    Toggle: import("styled-components").StyledComponent<typeof import("../../../button/Button").Button, any, {}, never>;
};
