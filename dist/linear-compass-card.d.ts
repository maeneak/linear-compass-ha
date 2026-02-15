import { LitElement, nothing, PropertyValues } from "lit";
import { LinearCompassCardConfig } from "./types";
import "./editor";
interface HomeAssistant {
    states: Record<string, HassEntity>;
    callService(domain: string, service: string, data?: Record<string, unknown>): void;
}
interface HassEntity {
    state: string;
    attributes: Record<string, unknown>;
}
export declare class LinearCompassCard extends LitElement {
    static styles: import("lit").CSSResult;
    hass: HomeAssistant;
    private _config;
    private _heading;
    private _animatedHeading;
    private _animFrame;
    private _resizeObserver?;
    private _initialized;
    static getConfigElement(): import("./editor").LinearCompassCardEditor;
    static getStubConfig(): {
        entity: string;
        show_name: boolean;
        show_degrees: boolean;
        show_cardinal: boolean;
        condensed: boolean;
    };
    setConfig(config: LinearCompassCardConfig): void;
    getCardSize(): number;
    getLayoutOptions(): {
        grid_min_rows: number;
        grid_rows: number;
        grid_min_columns: number;
        grid_columns: number;
    };
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(_changed: PropertyValues): void;
    protected updated(_changed: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startAnimation;
    private _readHeading;
    private _draw;
}
declare global {
    interface HTMLElementTagNameMap {
        "linear-compass-card": LinearCompassCard;
    }
}
export {};
