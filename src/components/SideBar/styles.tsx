import styled from "styled-components";
import { theme } from "../Theme";
import { Link } from "react-router-dom";

interface SidebarContainerProps {
  isOpen: boolean;
  isMobile: boolean;
}

export const SidebarContainer = styled.nav<SidebarContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: ${({ isOpen }) => (isOpen ? "200px" : "60px")};
  max-width: ${({ isOpen }) => (isOpen ? "300px" : "60px")};
  width: ${({ isOpen }) => (isOpen ? "250px" : "60px")};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  transition: width 0.3s ease;
  border-right: 2px solid ${theme.colors.background};
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.typography.body.fontFamily};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  line-height: ${({ theme }) => theme.typography.body.lineHeight};
  font-weight: ${({ theme }) => theme.typography.body.fontWeight};
  border-radius: ${theme.borderRadius.sm};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const ToggleButtonContainer = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  right: ${({ isOpen }) => (isOpen ? "-40px" : "-40px")};
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 0 20% 20% 0;
  background-color: ${({ theme }) => theme.colors.gray};
  border: 2px solid ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;
