import React from 'react';
export type AvatarProps = Readonly<{
    className?: string;
    image?: string;
    alt?: string;
    isSmall?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;
    isIdChecked?: boolean;
    unreadNotificationsCount?: string;
    unreadNotificationsCountAriaLabel?: string;
}>;
export declare const Avatar: ({ isSmall, isMedium, isLarge, className, image, alt, isIdChecked, unreadNotificationsCount, unreadNotificationsCountAriaLabel, }: AvatarProps) => React.JSX.Element;
