import React from 'react';
import { TextFieldProps } from '../../../textField';
import { BaseSectionProps } from '../baseSection';
export type TextFieldsSectionProps = BaseSectionProps & Readonly<{
    children: Array<React.ReactElement<TextFieldProps>>;
    className?: string;
    tagName?: string;
}>;
export declare const TextFieldsSection: import("styled-components").StyledComponent<(props: TextFieldsSectionProps) => React.JSX.Element, any, {}, never>;
