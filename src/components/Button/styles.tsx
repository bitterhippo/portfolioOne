import styled from "styled-components";
import { theme } from "../Theme";

type ThemeColors =
  | "background"
  | "primary"
  | "secondary"
  | "light"
  | "gray"
  | "textPrimary"
  | "textSecondary"
  | "link"
  | "linkHover";

interface ButtonProps {
  color: ThemeColors;
}

export const ButtonStyle = styled.button<ButtonProps>`
  color: ${({ color }) => theme.colors[color]};
`;
