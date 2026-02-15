export const CARDINALS: { deg: number; label: string }[] = [
  { deg: 0, label: "N" },
  { deg: 45, label: "NE" },
  { deg: 90, label: "E" },
  { deg: 135, label: "SE" },
  { deg: 180, label: "S" },
  { deg: 225, label: "SW" },
  { deg: 270, label: "W" },
  { deg: 315, label: "NW" },
];

const CARDINAL_TO_DEG: Record<string, number> = {
  N: 0,
  NNE: 22.5,
  NE: 45,
  ENE: 67.5,
  E: 90,
  ESE: 112.5,
  SE: 135,
  SSE: 157.5,
  S: 180,
  SSW: 202.5,
  SW: 225,
  WSW: 247.5,
  W: 270,
  WNW: 292.5,
  NW: 315,
  NNW: 337.5,
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
  NORTHEAST: 45,
  SOUTHEAST: 135,
  SOUTHWEST: 225,
  NORTHWEST: 315,
};

const FALLBACK_HEADING_ATTRIBUTES = [
  "bearing",
  "heading",
  "wind_bearing",
  "wind_direction",
  "azimuth",
  "direction",
] as const;

export function bearingToCardinal(deg: number): string {
  const dirs = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
                "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  const index = Math.round(((deg % 360) + 360) % 360 / 22.5) % 16;
  return dirs[index];
}

export function parseHeading(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return normaliseDeg(value);
  }

  if (typeof value !== "string") return null;

  const raw = value.trim();
  if (!raw) return null;

  const numeric = Number.parseFloat(raw.replace("°", ""));
  if (!Number.isNaN(numeric)) {
    return normaliseDeg(numeric);
  }

  const token = raw.toUpperCase().replace(/[^A-Z]/g, "");
  if (token in CARDINAL_TO_DEG) {
    return CARDINAL_TO_DEG[token];
  }

  return null;
}

export function resolveHeadingFromEntity(
  entity: { state: unknown; attributes?: Record<string, unknown> } | undefined,
  attribute?: string
): number | null {
  if (!entity) return null;

  if (attribute) {
    const attrHeading = parseHeading(entity.attributes?.[attribute]);
    if (attrHeading !== null) return attrHeading;
  }

  const stateHeading = parseHeading(entity.state);
  if (stateHeading !== null) return stateHeading;

  for (const attr of FALLBACK_HEADING_ATTRIBUTES) {
    if (attr === attribute) continue;
    const fallback = parseHeading(entity.attributes?.[attr]);
    if (fallback !== null) return fallback;
  }

  return null;
}

/** Normalise any degree value to 0..360 */
export function normaliseDeg(d: number): number {
  return ((d % 360) + 360) % 360;
}
