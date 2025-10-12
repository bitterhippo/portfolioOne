import styled from "styled-components";
import { theme } from "../Theme";

export const DropdownContainer = styled.div`
  width: 300px;
  max-height: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

export const Item = styled.div`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  cursor: pointer;
  color: ${theme.colors.textPrimary};
  font-family: "Roboto", sans-serif;

  &:hover {
    background: #f0f0f0;
  }
`;
