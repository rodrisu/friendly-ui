import React from 'react';
import { Icon } from '../_utils/icon';
export type CheckIconProps = Icon & Readonly<{
    absolute?: boolean;
    validate?: boolean;
    backgroundColor?: string;
    thin?: boolean;
}>;
declare const StyledCheckIcon: import("styled-components").StyledComponent<({ absolute, validate, backgroundColor, thin, ...props }: CheckIconProps) => React.JSX.Element, any, {}, never>;
export { StyledCheckIcon as CheckIcon };
