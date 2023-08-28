import React from 'react';
import { Icon } from '../_utils/icon';
export type CircleIconProps = Icon & Readonly<{
    absolute?: boolean;
    spinning?: boolean;
    thin?: boolean;
    innerDisc?: boolean;
}>;
declare const StyledCircleIcon: import("styled-components").StyledComponent<({ absolute, spinning, thin, innerDisc, ...props }: CircleIconProps) => React.JSX.Element, any, {}, never>;
export { StyledCircleIcon as CircleIcon };
