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
  background-size: auto 100%; /* keeps vertical fill */
  background-repeat: repeat; /* horizontal tiling */
  background-position: center;
  position: relative;
  display: flex;
  align-items: center; /* vertical center */
  justify-content: center; /* horizontal center */
  color: ${({ theme }) => theme.colors.background};
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.25);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1;
    text-align: center;
    color: ${theme.colors.gray};
    font-size: calc(5 * ${theme.fontSizes.lg});
    font-family: "Inter", sans-serif;
  }
`;

export const PageTextWrapper = styled.div`
  margin: ${theme.spacing.lg} calc(2 * ${theme.spacing.lg});
`;
