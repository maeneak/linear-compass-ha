import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { LinearCompassCardConfig, DEFAULT_CONFIG } from "./types";

interface HomeAssistant {
  states: Record<string, { state: string; attributes: Record<string, unknown> }>;
}

const SCHEMA = [
  {
    name: "entity",
    selector: { entity: { domain: ["sensor", "input_number"] } },
  },
  { name: "name", selector: { text: {} } },
  {
    type: "grid",
    name: "",
    schema: [
      { name: "show_name", selector: { boolean: {} } },
      { name: "show_degrees", selector: { boolean: {} } },
      { name: "show_cardinal", selector: { boolean: {} } },
      { name: "condensed", selector: { boolean: {} } },
    ],
  },
  {
    type: "expandable",
    name: "",
    title: "Appearance",
    icon: "mdi:palette",
    schema: [
      {
        type: "grid",
        name: "",
        schema: [
          { name: "needle_color", selector: { color_rgb: {} } },
          { name: "tick_color", selector: { color_rgb: {} } },
          { name: "text_color", selector: { color_rgb: {} } },
          { name: "background_color", selector: { color_rgb: {} } },
          { name: "cardinal_color", selector: { color_rgb: {} } },
          { name: "degree_color", selector: { color_rgb: {} } },
        ],
      },
    ],
  },
];

@customElement("linear-compass-card-editor")
export class LinearCompassCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: LinearCompassCardConfig;

  static styles = css`
    :host {
      display: block;
    }
    .root {
      padding: 16px;
    }
    ha-form {
      display: block;
    }
  `;

  public setConfig(config: LinearCompassCardConfig): void {
    this._config = { ...DEFAULT_CONFIG, ...config } as LinearCompassCardConfig;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;
    const config = ev.detail.value;
    // Convert rgb arrays to css colour strings if needed
    const processed = { ...this._config };
    for (const [key, val] of Object.entries(config)) {
      if (Array.isArray(val) && val.length === 3) {
        (processed as any)[key] = `rgb(${val[0]}, ${val[1]}, ${val[2]})`;
      } else {
        (processed as any)[key] = val;
      }
    }
    const event = new CustomEvent("config-changed", {
      detail: { config: processed },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  protected render() {
    if (!this.hass || !this._config) return nothing;

    const data = { ...this._config };

    return html`
      <div class="root">
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${SCHEMA}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
  }

  private _computeLabel = (schema: { name: string }): string => {
    const labels: Record<string, string> = {
      entity: "Entity",
      name: "Name",
      show_name: "Show Name",
      show_degrees: "Show Degrees",
      show_cardinal: "Show Cardinal",
      condensed: "Condensed (single row)",
      needle_color: "Needle Color",
      tick_color: "Tick Color",
      text_color: "Text Color",
      background_color: "Background Color",
      cardinal_color: "Cardinal Color",
      degree_color: "Degree Color",
    };
    return labels[schema.name] || schema.name;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "linear-compass-card-editor": LinearCompassCardEditor;
  }
}
