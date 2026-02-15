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

export const DEFAULT_CONFIG: Partial<LinearCompassCardConfig> = {
  show_name: false,
  show_degrees: true,
  show_cardinal: true,
  condensed: false,
  needle_color: "#ffffff",
  tick_color: "#cccccc",
  text_color: "#ffffff",
  background_color: "rgba(40, 40, 40, 0.9)",
  cardinal_color: "#aaaaaa",
  degree_color: "#999999",
};
