import { A11yProps } from '../_utils/interfaces';
export declare enum HintBubblePosition {
    ABOVE = "above",
    BELOW = "below"
}
export type HintBubbleProps = A11yProps & Readonly<{
    mainTitle: string;
    className?: string;
    onClose: () => void;
    closeButtonTitle?: string;
    description?: string;
    position?: HintBubblePosition;
}>;
declare const StyledHintBubble: import("styled-components").StyledComponent<(props: HintBubbleProps) => JSX.Element, any, {}, never>;
export { StyledHintBubble as HintBubble };
