export interface ButtonProps {
  color: ThemeColors;
}

export type ThemeColors =
  | "background"
  | "primary"
  | "secondary"
  | "light"
  | "gray"
  | "textPrimary"
  | "textSecondary"
  | "link"
  | "linkHover";
