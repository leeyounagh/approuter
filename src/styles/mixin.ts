// styles/mixins.ts
import { css } from "styled-components";
import { theme } from "./theme";

export const media = {
  mobileS: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.mobileS}) {
      ${styles}
    }
  `,
  mobileM: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.mobileM}) {
      ${styles}
    }
  `,
  tabletS: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.tabletS}) {
      ${styles}
    }
  `,
  tabletL: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.tabletL}) {
      ${styles}
    }
  `,
  laptop: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.laptop}) {
      ${styles}
    }
  `,
  desktop: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.desktop}) {
      ${styles}
    }
  `,
  ultraWide: (styles: TemplateStringsArray) => css`
    @media (max-width: ${theme.breakpoints.ultraWide}) {
      ${styles}
    }
  `,
};
