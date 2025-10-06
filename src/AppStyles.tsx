import { styled } from "styled-components";
import { theme } from "./components/Theme";

interface ContentWindowProps {
  isPrimary: boolean;
  isSideBarOpen: boolean;
}

export const ContentWindow = styled.div<ContentWindowProps>`
  flex: ${({ isSideBarOpen }) => (isSideBarOpen ? 9 : 7)};
  background-color: ${({ isPrimary, theme }) =>
    isPrimary ? theme.colors.light : theme.colors.background};
  color: ${({ isPrimary }) => (isPrimary ? "#F4E3B2" : "#050517")};
  padding: ${theme.spacing.md};
  transition: flex 0.3s ease;
`;

export const LayOutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;
