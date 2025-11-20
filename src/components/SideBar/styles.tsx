import styled from "styled-components";
import { theme } from "../Theme";
import { Link } from "react-router-dom";

interface SidebarContainerProps {
  isOpen: boolean;
  isMobile: boolean;
}

export const SideBarWrapper = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.25);
  transition: width 0.3s ease;
`;

export const SidebarContainer = styled.div<SidebarContainerProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "250px" : "80px")};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  border-right: 2px solid ${theme.colors.background};
  align-items: center;
  justify-content: center;
  gap: 30px;
  transition: width 0.3s ease;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${theme.colors.background};
    transition: color 0.2s ease;

    &:hover {
      color: #fff;
    }
  }
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
    color: #fff;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.textSecondary};
    text-underline-offset: 3px;
  }
`;

export const ToggleButtonContainer = styled.button<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  right: ${({ isOpen }) => (isOpen ? "-30px" : "-30px")};
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
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
