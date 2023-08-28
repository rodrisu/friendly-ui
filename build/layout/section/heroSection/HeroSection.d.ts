import React from 'react';
type HeroImageProps = {
    heroImageUrlSmall: string;
    heroImageUrlLarge: string;
};
export type HeroSectionProps = HeroImageProps & {
    heroText?: string;
    bottomElement: React.ReactElement;
};
export declare function HeroSection({ heroText, bottomElement, heroImageUrlSmall, heroImageUrlLarge, }: HeroSectionProps): React.JSX.Element;
export {};
