export const colors = {
  // Espaço profundo
  background: "#060815",
  backgroundAlt: "#0A0E22",

  // Painéis / cards (vidro escuro)
  card: "#0E1330",
  surface: "#141A3A",
  border: "#283163",

  // Neon
  primary: "#6C5CFF",   // violeta elétrico
  secondary: "#22D3EE", // ciano
  accent: "#E879F9",    // magenta

  // Texto
  text: "#EAF0FF",
  textLight: "#8A93C2",

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
};