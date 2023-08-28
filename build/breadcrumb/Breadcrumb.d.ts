import React from 'react';
export type CrumbProps = Readonly<{
    name: string;
    url: string;
}>;
export declare enum DividerPosition {
    TOP = "top",
    BOTTOM = "bottom",
    NONE = "none"
}
export type BreadcrumbProps = {
    crumbs: Array<CrumbProps>;
    divider?: DividerPosition;
};
export declare const Breadcrumb: {
    ({ crumbs, divider }: BreadcrumbProps): React.JSX.Element;
    defaultProps: {
        divider: DividerPosition;
    };
};
