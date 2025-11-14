import { theme } from "../components/Theme";
import styled from "styled-components";

export const PageContentWrapper = styled.div`
  background: ${theme.colors.light};
  color: ${theme.colors.background};
  height: 100%;
  width: 100%;
`;

export const Banner = styled.div<{ image: string }>`
  height: 25vh;
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
  display: flex;
  flex-direction: column;
  margin: 0px calc(2 * ${theme.spacing.lg});
  gap: ${theme.spacing.xs};
`;

const HeadingDefaults = styled.h1<{ size?: string }>`
  font-family: "Inter", sans-serif;
  margin: ${theme.spacing.lg} 0px 0px 0px;
  color: #050517;
`;

export const StyledH1 = styled(HeadingDefaults)`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
`;

export const StyledH2 = styled(HeadingDefaults)`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
`;

export const StyledBody = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: ${theme.fontSizes.sm};
  font-weight: 400;
  line-height: 1.5;
  color: #050517;
`;

export const ProjectSelectorContentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  font-family: "Roboto", sans-serif;
  color: ${theme.colors.textPrimary};
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  overflow-y: auto;
`;
