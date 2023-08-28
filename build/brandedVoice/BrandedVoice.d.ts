import React from 'react';
export type BrandedVoiceProps = Readonly<{
    label: string;
    subLabel: string;
    icon: JSX.Element;
}>;
export declare const BrandedVoice: ({ label, subLabel, icon }: BrandedVoiceProps) => React.JSX.Element;
