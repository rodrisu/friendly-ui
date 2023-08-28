import { TripCardProps } from '../TripCard';
export type PriceProps = Readonly<{
    price: TripCardProps['price'];
    originalPrice?: TripCardProps['originalPrice'];
}>;
export declare const Price: ({ price, originalPrice }: PriceProps) => JSX.Element;
