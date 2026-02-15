# Linear Compass Card

A horizontal linear compass gauge custom card for Home Assistant. Displays heading data as a scrolling compass strip with a fixed centre needle — similar to avionics or marine heading indicators.

![Compass Preview](compass-preview.png)

## Features

- **Linear horizontal compass** with smooth animated scrolling
- **Canvas-rendered** for crisp display at any DPI
- Accepts numeric headings (`0-360`) or cardinal text (`N`, `NNE`, `SW`, etc.)
- Cardinal directions (N, NE, E, SE, S, SW, W, NW)
- Degree markings every 20°, tick marks every 5°/10°
- **Condensed mode** — fits a single grid row in HA dashboard
- Edge fade-out with glass reflection effect
- Fully customisable colours (needle, ticks, text, background, cardinals)
- Visual config editor in the HA UI

## Installation

### HACS (Recommended)

1. Open HACS → Frontend → **+ Explore & Download Repositories**
2. Search for **Linear Compass Card**
3. Install and restart Home Assistant

### Manual

1. Download `linear-compass-card.js` from the [latest release](https://github.com/your-repo/linear-compass-card/releases)
2. Copy to `config/www/linear-compass-card.js`
3. Add as a resource in **Settings → Dashboards → Resources**:
   - URL: `/local/linear-compass-card.js`
   - Type: JavaScript Module

## Configuration

| Option             | Type    | Default                    | Description                          |
|--------------------|---------|----------------------------|--------------------------------------|
| `entity`           | string  | **required**               | Entity with heading value (numeric or cardinal text) |
| `attribute`        | string  | —                          | Optional attribute to read heading from |
| `name`             | string  | —                          | Card title                           |
| `show_name`        | boolean | `false`                    | Show the card name                   |
| `show_degrees`     | boolean | `true`                     | Show degree readout below gauge      |
| `show_cardinal`    | boolean | `true`                     | Show cardinal labels on gauge        |
| `condensed`        | boolean | `false`                    | Compact single-row mode              |
| `needle_color`     | string  | `#ffffff`                  | Centre needle colour                 |
| `tick_color`       | string  | `#cccccc`                  | Tick mark colour                     |
| `text_color`       | string  | `#ffffff`                  | Primary text colour                  |
| `background_color` | string  | `rgba(40, 40, 40, 0.9)`   | Gauge background                     |
| `cardinal_color`   | string  | `#aaaaaa`                  | Cardinal direction text colour       |
| `degree_color`     | string  | `#999999`                  | Degree number colour                 |

### Example YAML

```yaml
type: custom:linear-compass-card
entity: sensor.wind_bearing
attribute: heading
name: Wind Direction
show_name: true
show_degrees: true
condensed: false
```

If `attribute` is not set, the card reads `entity.state` first, then falls back to common heading attributes (`bearing`, `heading`, `wind_bearing`, `wind_direction`, `azimuth`, `direction`).

### Condensed single-row mode

```yaml
type: custom:linear-compass-card
entity: sensor.wind_bearing
condensed: true
```

Set `condensed: true` and in dashboard grid options set the card to 1 row height.

## Development

```bash
npm install
npm run build       # production build → dist/
npm run watch       # rebuild on changes
```

## License

MIT
