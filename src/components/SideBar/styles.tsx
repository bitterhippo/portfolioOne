import styled from "styled-components";
import { theme } from "../Theme";

interface SidebarContainerProps {
  isOpen: boolean;
  isMobile: boolean;
}

export const SidebarContainer = styled.div<SidebarContainerProps>`
  display: flex;
  flex-direction: column;
  min-width: ${({ isOpen }) => (isOpen ? "200px" : "60px")};
  max-width: ${({ isOpen }) => (isOpen ? "300px" : "60px")};
  width: ${({ isOpen }) => (isOpen ? "250px" : "60px")};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.light};
  transition: width 0.3s ease;
  border-right: 2px solid ${theme.colors.background};
`;
