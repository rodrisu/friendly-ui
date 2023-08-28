import React from 'react';
import { Icon } from '../_utils/icon';
export type CheckCircleIconProps = Icon & Readonly<{
    background?: boolean;
}>;
declare const StyledCheckCircleIcon: import("styled-components").StyledComponent<({ background, ...props }: CheckCircleIconProps) => React.JSX.Element, any, {}, never>;
export { StyledCheckCircleIcon as CheckCircleIcon };
