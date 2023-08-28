import React from 'react';
type Testimonial = Readonly<{
    quote: string;
    author: string;
}>;
export type TestimonialsProps = Readonly<{
    illustration: JSX.Element;
    testimonials: Array<Testimonial>;
    a11y: Readonly<{
        mainTitle: string;
        prev: string;
        next: string;
    }>;
}>;
export declare const Testimonials: ({ illustration, testimonials, a11y }: TestimonialsProps) => React.JSX.Element;
export {};
