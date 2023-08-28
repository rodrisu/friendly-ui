import { ReactNode } from 'react';
import { ThemeProps } from 'styled-components';
export type TextProps = Readonly<{
    id?: string;
    className?: string;
    children: ReactNode;
    itemProp?: string;
    theme: ThemeProps<any>;
}>;
export declare const Text: ({ theme, ...props }: TextProps) => JSX.Element;
