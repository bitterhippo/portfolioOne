import { theme } from "../components/Theme";
import styled from "styled-components";

export const PageContentWrapper = styled.div`
  background: ${theme.colors.light};
  color: ${theme.colors.background};
  height: 100%;
  width: 100%;
`;

export const Banner = styled.div<{ image: string }>`
  height: 30vh;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: flex-end; /* or center */
  padding: 1rem;
  color: ${({ theme }) => theme.colors.background};
  font-size: 2rem;
  font-weight: bold;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4); /* overlay for text contrast */
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

export const PageTextWrapper = styled.div`
  margin: ${theme.spacing.md};
`;
