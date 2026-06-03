import {colors} from"./colors";

export const lightTheme = {
  colors:{
    background: colors.background,
    card: colors.card,
    text: colors.text,
    mutedText: colors.textLight,
    border: colors.border,
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
  },
  radius: {
    sm: 8,
    md: 14,
    lg: 22,
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 24,
    xl: 32,
  },
};
export const darkTheme = {
  colors: {
    background: colors.backgroundDark,
    card: colors.cardDark,
    text: colors.textDark,
    mutedText: "#CBD5E1",
    border: "#334155",
    primary: colors.primary,
    secondary: colors.secondary,
    success: colors.success,
    warning: colors.warning,
    danger: colors.danger,
},
  radius: lightTheme.radius,
  spacing: lightTheme.spacing,
};

export type AppTheme = typeof lightTheme;