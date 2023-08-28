import React from 'react';
import { A11yProps } from '../_utils/interfaces';
export type ProfileProps = A11yProps & Readonly<{
    className?: string;
    mainTitle: string;
    info?: string | JSX.Element;
    isLink?: boolean;
    picture?: string;
    alt?: string;
    isIdChecked?: boolean;
    isMedium?: boolean;
    score?: number;
    ratings?: number;
    ratingsLabel?: string;
    href?: string | JSX.Element;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void;
    onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
}>;
export declare const Profile: (props: ProfileProps) => React.JSX.Element;
