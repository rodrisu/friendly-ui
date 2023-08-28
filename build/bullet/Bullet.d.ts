import React from 'react';
export declare enum BulletTypes {
    DEFAULT = "default",
    SMALL = "small",
    ADDON = "addon",
    MAP_ACTIVE = "map-active",
    MAP_INACTIVE = "map-inactive",
    SEARCH = "search"
}
export type BulletProps = Readonly<{
    className?: string;
    type?: BulletTypes;
}>;
export declare const Bullet: {
    ({ className, type }: BulletProps): React.JSX.Element;
    defaultProps: {
        className: string;
        type: BulletTypes;
    };
};
