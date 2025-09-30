import { styled } from "styled-components";
import { theme } from "./components/Theme";

interface ContentWindowProps {
  isPrimary: boolean;
  isSideBarOpen: boolean;
}

export const ContentWindow = styled.div<ContentWindowProps>`
  flex: ${({ isSideBarOpen }) => (isSideBarOpen ? 9 : 7)};
  background-color: ${({ isPrimary }) => (isPrimary ? "#CF5C36" : "#D3D5D7")};
  color: ${({ isPrimary }) => (isPrimary ? "#F4E3B2" : "#050517")};
  padding: ${theme.spacing.md};
  transition: flex 0.3s ease;
`;

export const LayOutContainer = styled.div`
  display: flex;
  height: 100vh;
`;
