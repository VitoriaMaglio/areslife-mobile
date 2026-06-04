export const colors = {
  // Espaço profundo
  background: "#060815",
  backgroundSoft: "#0A0E22",
  backgroundAlt: "#0A0E22",

  // Painéis / cards
  card: "#0E1330",
  cardSoft: "#141A3A",
  surface: "#141A3A",

  // Bordas
  border: "#283163",
  borderBlue: "#22D3EE",
  borderPurple: "#6C5CFF",
  borderOrange: "#F97316",

  // Neon principal
  primary: "#6C5CFF",
  secondary: "#22D3EE",
  accent: "#E879F9",

  // Cores auxiliares
  blue: "#22D3EE",
  purple: "#6C5CFF",
  orange: "#F97316",
  red: "#FB7185",
  green: "#34D399",
  yellow: "#FBBF24",

  // Texto
  text: "#EAF0FF",
  textSecondary: "#8A93C2",
  textLight: "#8A93C2",
  muted: "#64748B",

  // Status
  success: "#34D399",
  warning: "#FBBF24",
  danger: "#FB7185",

  // Brilho
  glow: "#6C5CFF",
} as const;

// Degradês reutilizáveis
export const gradients = {
  space: ["#0A0E22", "#060815", "#02030A"] as const,
  hero: ["#1B1F4D", "#0E1330"] as const,
  button: ["#6C5CFF", "#22D3EE"] as const,
  mars: ["#F97316", "#FB7185", "#6C5CFF"] as const,
  blue: ["rgba(34,211,238,0.35)", "rgba(34,211,238,0.08)"] as const,
  purple: ["rgba(108,92,255,0.35)", "rgba(108,92,255,0.08)"] as const,
  orange: ["rgba(249,115,22,0.35)", "rgba(249,115,22,0.08)"] as const,
};