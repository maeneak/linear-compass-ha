export declare const CARDINALS: {
    deg: number;
    label: string;
}[];
export declare function bearingToCardinal(deg: number): string;
export declare function parseHeading(value: unknown): number | null;
export declare function resolveHeadingFromEntity(entity: {
    state: unknown;
    attributes?: Record<string, unknown>;
} | undefined, attribute?: string): number | null;
/** Normalise any degree value to 0..360 */
export declare function normaliseDeg(d: number): number;
