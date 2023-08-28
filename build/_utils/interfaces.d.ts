export type CommonFieldsProps = {
    id?: string;
    name: string;
    className?: string;
    value: string;
    disabled?: boolean;
    autoFocus?: boolean;
    required?: boolean;
};
export type A11yProps = {
    id?: string;
    role?: string;
    title?: string;
    tabIndex?: number;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    'aria-controls'?: string;
};
type A11yKeys = keyof A11yProps;
export declare function pickA11yProps<T extends A11yProps>(source: T): Pick<T, A11yKeys>;
export {};
