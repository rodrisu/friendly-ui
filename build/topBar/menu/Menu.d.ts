import React from 'react';
import { A11yProps } from '../../_utils/interfaces';
import { ItemChoiceProps } from '../../itemChoice';
export type MenuProps = A11yProps & Readonly<{
    children: React.ReactElement<ItemChoiceProps> | Array<React.ReactElement<ItemChoiceProps>>;
    className?: string;
    withSeparators?: boolean;
}>;
export declare const Menu: {
    ({ className, children, withSeparators, ...props }: MenuProps): React.JSX.Element;
    Divider: React.FunctionComponent<{}>;
};
