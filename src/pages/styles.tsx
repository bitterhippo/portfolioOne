import { theme } from "../components/Theme";
import styled from "styled-components";

export const PageContentWrapper = styled.div`
  background: ${theme.colors.light};
  color: ${theme.colors.background};
  height: 100%;
  width: 100%;
`;

export const BannerImage = styled.img`
  height: 25vh;
  width: 100%;
  object-fit: cover;
`;
