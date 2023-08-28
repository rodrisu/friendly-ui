import React from 'react';
export type NormalizeProps = Readonly<{
    hasHorizontalSpacing?: boolean;
    noHorizontalSpacing?: boolean;
}>;
/**
 * Util method to normalize horizontal spacing
 * using !important because this should never be overridden
 */
export declare const normalizeHorizontally: (props: NormalizeProps) => string;
export type LayoutNormalizerProps = Readonly<{
    useLegacyNormalization?: boolean;
}>;
export declare const LayoutNormalizer: ({ useLegacyNormalization }: LayoutNormalizerProps) => React.JSX.Element;
