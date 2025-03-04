"use client";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./registry";
import { theme } from "@/shared/styles/theme";
import { GlobalStyle } from "@/shared/styles/global";
import Header from "@/shared/header/Header";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header/>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
