import { LitElement, nothing } from "lit";
import { LinearCompassCardConfig } from "./types";
interface HomeAssistant {
    states: Record<string, {
        state: string;
        attributes: Record<string, unknown>;
    }>;
}
export declare class LinearCompassCardEditor extends LitElement {
    hass: HomeAssistant;
    private _config;
    static styles: import("lit").CSSResult;
    setConfig(config: LinearCompassCardConfig): void;
    private _valueChanged;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "linear-compass-card-editor": LinearCompassCardEditor;
    }
}
export {};
