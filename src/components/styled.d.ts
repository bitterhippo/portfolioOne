// styled.d.ts
import "styled-components";
import { theme } from "./components/Theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      light: string;
      primary: string;
      secondary: string;
      gray: string;
      textPrimary: string;
      textSecondary: string;
      link: string;
      linkHover: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      h1: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
      };
      h2: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
      };
      body: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
      };
    };
  }
}
