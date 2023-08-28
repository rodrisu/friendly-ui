/// <reference types="react" />
/**
 *  Basic styles & transitions that apply on all overlays
 * Some of them are adding more transitions (e.g. stepperOverlay)
 */
declare const StyledOverlay: import("styled-components").StyledComponent<({ closeOnBlur, shouldDisplay, children, className }: {
    closeOnBlur: () => void;
    shouldDisplay: boolean;
    children: import("react").ReactNode;
    className: string;
}) => import("react").JSX.Element, any, {}, never>;
export { StyledOverlay as Overlay };
