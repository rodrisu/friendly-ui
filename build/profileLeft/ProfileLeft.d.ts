import React from 'react';
import { Icon } from '../_utils/icon';
import { A11yProps } from '../_utils/interfaces';
type Option = Readonly<{
    icon: React.ReactElement<Icon>;
    label: string;
}>;
export type ProfileLeftProps = A11yProps & Readonly<{
    className?: string;
    pictureUrl: string;
    displayName: string;
    isIdChecked?: boolean;
    additionalInfo?: string;
    averageRating?: string;
    options?: ReadonlyArray<Option>;
    noHorizontalSpacing?: boolean;
}>;
export declare function ProfileLeft(props: ProfileLeftProps): JSX.Element;
export {};
