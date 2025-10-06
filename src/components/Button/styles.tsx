import styled from "styled-components";
import { theme } from "../Theme";
import type { ThemeColors } from "./types";

export interface StyledButtonProps {
  color: ThemeColors;
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: absolute;
  bottom: ${theme.spacing.sm};
  right: -12px;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  cursor: pointer;
`;
