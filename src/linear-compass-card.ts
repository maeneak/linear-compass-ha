import { LitElement, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { compassStyles } from "./styles";
import { LinearCompassCardConfig, DEFAULT_CONFIG } from "./types";
import { CARDINALS, bearingToCardinal, normaliseDeg } from "./utils";
import "./editor";

// ---- HA type stubs ----
interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(domain: string, service: string, data?: Record<string, unknown>): void;
}
interface HassEntity {
  state: string;
  attributes: Record<string, unknown>;
}

// Register card info
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "linear-compass-card",
  name: "Linear Compass Card",
  description: "A horizontal linear compass gauge for Home Assistant",
  preview: true,
  documentationURL: "https://github.com/maeneak/linear-compass-ha",
});

@customElement("linear-compass-card")
export class LinearCompassCard extends LitElement {
  static styles = compassStyles;

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: LinearCompassCardConfig;

  private _heading = 0;
  private _animatedHeading = 0;
  private _animFrame = 0;
  private _resizeObserver?: ResizeObserver;
  private _initialized = false;

  // ---- HA card interface ----

  public static getConfigElement() {
    return document.createElement("linear-compass-card-editor");
  }

  public static getStubConfig() {
    return {
      entity: "",
      show_name: false,
      show_degrees: true,
      show_cardinal: true,
      condensed: false,
    };
  }

  public setConfig(config: LinearCompassCardConfig): void {
    if (!config) throw new Error("Invalid configuration");
    this._config = { ...DEFAULT_CONFIG, ...config } as LinearCompassCardConfig;
  }

  public getCardSize(): number {
    return this._config?.condensed ? 1 : 2;
  }

  public getLayoutOptions() {
    if (this._config?.condensed) {
      return { grid_min_rows: 1, grid_rows: 1, grid_min_columns: 2, grid_columns: 4 };
    }
    return { grid_min_rows: 2, grid_rows: 2, grid_min_columns: 2, grid_columns: 4 };
  }

  // ---- lifecycle ----

  connectedCallback(): void {
    super.connectedCallback();
    this._resizeObserver = new ResizeObserver(() => this._draw());
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    cancelAnimationFrame(this._animFrame);
    this._resizeObserver?.disconnect();
    this._initialized = false;
  }

  protected firstUpdated(_changed: PropertyValues): void {
    super.firstUpdated(_changed);
    const container = this.renderRoot.querySelector(".compass-container");
    if (container) this._resizeObserver!.observe(container);
    this._initialized = true;
    // Initial draw after DOM is ready
    this._startAnimation();
  }

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    if (!this._config || !this.hass || !this._initialized) return;

    const entity = this.hass.states[this._config.entity];
    if (entity) {
      const raw = parseFloat(entity.state);
      if (!isNaN(raw)) {
        const newHeading = normaliseDeg(raw);
        if (newHeading !== this._heading) {
          this._heading = newHeading;
          this._startAnimation();
        }
      }
    }
  }

  // ---- rendering ----

  protected render() {
    if (!this._config) return nothing;

    if (this._config.condensed) {
      this.setAttribute("condensed", "");
    } else {
      this.removeAttribute("condensed");
    }

    // Apply CSS custom properties from config
    const styleVars = `
      --compass-needle: ${this._config.needle_color};
      --compass-tick: ${this._config.tick_color};
      --compass-text: ${this._config.text_color};
      --compass-bg: ${this._config.background_color};
      --compass-cardinal: ${this._config.cardinal_color};
      --compass-degree: ${this._config.degree_color};
    `;

    const entity = this.hass?.states[this._config.entity];
    const heading = entity ? parseFloat(entity.state) : 0;
    const cardinal = bearingToCardinal(isNaN(heading) ? 0 : heading);
    const degStr = isNaN(heading) ? "---" : `${Math.round(normaliseDeg(heading))}`;

    return html`
      <ha-card style="${styleVars}">
        <div class="compass-wrapper">
          ${this._config.show_name && this._config.name
            ? html`<div class="compass-name">${this._config.name}</div>`
            : nothing}
          <div class="compass-container">
            <canvas class="compass-canvas"></canvas>
            <div class="compass-fade-left"></div>
            <div class="compass-fade-right"></div>
            <div class="needle-top"></div>
            <div class="needle-line"></div>
            <div class="needle-bottom"></div>
            <div class="compass-glass"></div>
          </div>
          ${this._config.show_degrees !== false
            ? html`<div class="compass-readout">${degStr}° ${cardinal}</div>`
            : nothing}
        </div>
      </ha-card>
    `;
  }

  // ---- animation ----

  private _startAnimation(): void {
    cancelAnimationFrame(this._animFrame);
    const animate = () => {
      // Shortest-path interpolation
      let diff = this._heading - this._animatedHeading;
      // Wrap delta to -180..180
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;

      if (Math.abs(diff) > 0.05) {
        this._animatedHeading = normaliseDeg(this._animatedHeading + diff * 0.12);
        this._draw();
        this._animFrame = requestAnimationFrame(animate);
      } else {
        this._animatedHeading = this._heading;
        this._draw();
      }
    };
    this._animFrame = requestAnimationFrame(animate);
  }

  // ---- canvas drawing ----

  private _draw(): void {
    const canvas = this.renderRoot.querySelector(
      "canvas.compass-canvas"
    ) as HTMLCanvasElement | null;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const heading = this._animatedHeading;
    const condensed = this._config?.condensed ?? false;

    // The centre of the canvas corresponds to the current heading.
    // Each degree is PIXELS_PER_DEGREE pixels wide.
    const ppd = w / 90; // show 90° either side of centre → 180° window
    const centreX = w / 2;

    // Determine the range of degrees to draw (±100 for safety)
    const degStart = heading - 100;
    const degEnd = heading + 100;

    // --- ticks & numbers ---
    const tickColor = this._config?.tick_color ?? "#cccccc";
    const degColor = this._config?.degree_color ?? "#999999";
    const cardinalColor = this._config?.cardinal_color ?? "#aaaaaa";

    for (let d = Math.floor(degStart); d <= Math.ceil(degEnd); d++) {
      const normD = normaliseDeg(d);
      // x position relative to centre
      let offsetDeg = d - heading;
      const x = centreX + offsetDeg * ppd;

      if (x < -20 || x > w + 20) continue;

      const isMajor = normD % 10 === 0;
      const isMid = normD % 5 === 0;

      if (condensed) {
        // In condensed mode, only draw every 5°
        if (normD % 5 !== 0) continue;
      }

      // Tick heights
      let tickH: number;
      if (isMajor) {
        tickH = condensed ? 10 : 16;
      } else if (isMid) {
        tickH = condensed ? 6 : 10;
      } else {
        tickH = condensed ? 3 : 5;
      }

      ctx.beginPath();
      ctx.strokeStyle = tickColor;
      ctx.lineWidth = isMajor ? 2 : 1;
      const topOffset = condensed ? 8 : 12;
      ctx.moveTo(x, topOffset);
      ctx.lineTo(x, topOffset + tickH);
      ctx.stroke();

      // Degree numbers at every 20°
      if (normD % 20 === 0) {
        ctx.fillStyle = degColor;
        ctx.font = condensed
          ? "bold 11px 'Segoe UI', Roboto, sans-serif"
          : "bold 13px 'Segoe UI', Roboto, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        const numY = topOffset - (condensed ? 9 : 12);
        ctx.fillText(String(normD), x, numY < 0 ? 1 : numY);
      }
    }

    // --- Cardinal directions ---
    const cardinalY = condensed ? 28 : 44;
    for (const c of CARDINALS) {
      // We need to find the x of this cardinal relative to current heading.
      // There may be multiple representations (c.deg, c.deg-360, c.deg+360).
      for (const offset of [-360, 0, 360]) {
        const d = c.deg + offset;
        const offsetDeg = d - heading;
        if (Math.abs(offsetDeg) > 100) continue;
        const x = centreX + offsetDeg * ppd;
        if (x < -40 || x > w + 40) continue;

        ctx.fillStyle = cardinalColor;
        const isMain = c.label.length === 1; // N, E, S, W
        ctx.font = isMain
          ? (condensed ? "bold 14px 'Segoe UI', Roboto, sans-serif" : "bold 18px 'Segoe UI', Roboto, sans-serif")
          : (condensed ? "bold 11px 'Segoe UI', Roboto, sans-serif" : "bold 14px 'Segoe UI', Roboto, sans-serif");
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(c.label, x, cardinalY);
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "linear-compass-card": LinearCompassCard;
  }
}
