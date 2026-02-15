export interface LinearCompassCardConfig {
    type: string;
    entity: string;
    name?: string;
    show_name?: boolean;
    show_degrees?: boolean;
    show_cardinal?: boolean;
    condensed?: boolean;
    needle_color?: string;
    tick_color?: string;
    text_color?: string;
    background_color?: string;
    cardinal_color?: string;
    degree_color?: string;
}
export declare const DEFAULT_CONFIG: Partial<LinearCompassCardConfig>;
