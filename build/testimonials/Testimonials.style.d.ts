/// <reference types="react" />
export declare const StyledCard: import("styled-components").StyledComponent<({ className, children }: Readonly<{
    className?: string;
    children?: import("react").ReactNode;
}>) => import("react").JSX.Element, any, {}, never>;
export declare const StyledCarousel: import("styled-components").StyledComponent<"ul", any, {
    activeTestimonial: number;
    testimonialCount: number;
}, never>;
export declare const StyledTestimonials: {
    Container: import("styled-components").StyledComponent<"div", any, {}, never>;
    Content: import("styled-components").StyledComponent<"div", any, {}, never>;
    Illustration: import("styled-components").StyledComponent<"div", any, {}, never>;
    Testimonials: import("styled-components").StyledComponent<"div", any, {}, never>;
    Card: import("styled-components").StyledComponent<({ className, children }: Readonly<{
        className?: string;
        children?: import("react").ReactNode;
    }>) => import("react").JSX.Element, any, {}, never>;
    Carousel: import("styled-components").StyledComponent<"ul", any, {
        activeTestimonial: number;
        testimonialCount: number;
    }, never>;
    Author: import("styled-components").StyledComponent<({ theme, ...props }: Readonly<{
        id?: string;
        className?: string;
        children: import("react").ReactNode;
        itemProp?: string;
        theme: import("styled-components").ThemeProps<any>;
    }>) => JSX.Element, any, {
        isInverted?: boolean;
    }, "isInverted">;
    BulletList: import("styled-components").StyledComponent<"ul", any, {}, never>;
    Bullet: import("styled-components").StyledComponent<"li", any, {
        active: boolean;
    }, never>;
};
