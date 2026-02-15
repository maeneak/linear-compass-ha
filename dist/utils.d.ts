export declare const CARDINALS: {
    deg: number;
    label: string;
}[];
export declare function bearingToCardinal(deg: number): string;
/** Normalise any degree value to 0..360 */
export declare function normaliseDeg(d: number): number;
