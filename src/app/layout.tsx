// app/layout.tsx
"use client";

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}