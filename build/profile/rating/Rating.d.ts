export type RatingProps = Readonly<{
    score?: number;
    ratings: number;
    children: string;
}>;
export declare const Rating: ({ score, ratings, children }: RatingProps) => JSX.Element;
