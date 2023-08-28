/// <reference types="react" />
import { Modal } from '../modal';
export declare const SuccessModalElements: {
    StyledSuccessModal: import("styled-components").StyledComponent<typeof Modal, any, {}, never>;
    Media: import("styled-components").StyledComponent<"div", any, {}, never>;
    Figure: import("styled-components").StyledComponent<"figure", any, {}, never>;
    Content: import("styled-components").StyledComponent<"div", any, {}, never>;
    SuccessTitle: import("styled-components").StyledComponent<({ id, className, children, isInverted, as }: Readonly<{
        children: import("react").ReactNode;
        id?: string;
        className?: string;
        isInverted?: boolean;
        as?: import("react").ComponentType<any> | keyof JSX.IntrinsicElements;
    }>) => import("react").JSX.Element, any, {
        isInverted: true;
    }, "isInverted">;
    SuccessAction: import("styled-components").StyledComponent<"div", any, {}, never>;
    SuccessButton: import("styled-components").StyledComponent<typeof import("../button/Button").Button, any, {}, never>;
};
