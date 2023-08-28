import React from 'react';
import { A11yProps } from '../_utils/interfaces';
import { NormalizeProps } from '../layout/layoutNormalizer';
export type ItemActionLabelProps = NormalizeProps & A11yProps & Readonly<{
    labelTitle: string | JSX.Element;
    action: string;
    className?: string;
    leftAddon?: React.ReactNode;
    subLabel?: string;
    href?: string | JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
}>;
export declare const ItemActionLabel: (props: ItemActionLabelProps) => React.JSX.Element;
