import { MutableRefObject } from 'react';
export declare const useInView: (item: MutableRefObject<HTMLElement>, { root, rootMargin, threshold }: Partial<IntersectionObserverInit>) => boolean;
