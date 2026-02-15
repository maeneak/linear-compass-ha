import { css } from "lit";

export const compassStyles = css`
  :host {
    display: block;
    --compass-needle: #ffffff;
    --compass-tick: #cccccc;
    --compass-text: #ffffff;
    --compass-bg: rgba(40, 40, 40, 0.9);
    --compass-cardinal: #aaaaaa;
    --compass-degree: #999999;
  }

  ha-card {
    overflow: hidden;
    background: transparent;
    color: var(--compass-text);
  }

  .compass-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .compass-name {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 0 4px;
    color: var(--primary-text-color, var(--compass-text));
  }

  .compass-container {
    position: relative;
    width: 100%;
    height: 80px;
    overflow: hidden;
    background: var(--compass-bg);
    border-radius: 12px;
  }

  :host([condensed]) .compass-container {
    height: 56px;
    border-radius: 8px;
  }

  /* The scrolling strip – rendered via canvas */
  .compass-strip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  canvas.compass-canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Gradient fade on edges */
  .compass-fade-left,
  .compass-fade-right {
    position: absolute;
    top: 0;
    width: 25%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
  }

  .compass-fade-left {
    left: 0;
    background: linear-gradient(to right, var(--compass-bg), transparent);
  }

  .compass-fade-right {
    right: 0;
    background: linear-gradient(to left, var(--compass-bg), transparent);
  }

  /* Centre needle indicators */
  .needle-top,
  .needle-bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    width: 0;
    height: 0;
  }

  .needle-top {
    top: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid var(--compass-needle);
  }

  :host([condensed]) .needle-top {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid var(--compass-needle);
  }

  .needle-bottom {
    bottom: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid var(--compass-needle);
  }

  :host([condensed]) .needle-bottom {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid var(--compass-needle);
  }

  .needle-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    margin-left: -1px;
    background: var(--compass-needle);
    opacity: 0.5;
    z-index: 3;
    pointer-events: none;
  }

  /* Bottom glass reflection bar */
  .compass-glass {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.04) 40%,
      rgba(255, 255, 255, 0.07)
    );
    pointer-events: none;
    z-index: 2;
  }

  /* Degree readout below gauge (optional) */
  .compass-readout {
    text-align: center;
    font-size: 12px;
    padding: 4px 0 6px;
    color: var(--secondary-text-color, var(--compass-degree));
    font-variant-numeric: tabular-nums;
  }

  :host([condensed]) .compass-readout {
    display: none;
  }

  :host([condensed]) .compass-name {
    display: none;
  }
`;
