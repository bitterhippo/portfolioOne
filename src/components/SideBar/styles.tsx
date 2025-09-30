import styled from "styled-components";
import { theme } from "../Theme";

interface SidebarContainerProps {
  isOpen: boolean;
  isMobile: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  display: flex;
  flex-direction: column;
  min-width: ${({ isOpen }) => (isOpen ? "60px" : "200px")};
  max-width: ${({ isOpen }) => (isOpen ? "60px" : "300px")};
  width: ${({ isOpen }) => (isOpen ? "60px" : "250px")};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  transition: width 0.3s ease;
  overflow: hidden;
`;
