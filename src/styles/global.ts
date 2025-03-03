// styles/global.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* 기본 Reset CSS */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 리스트 스타일 제거 */
  ul, ol {
    list-style: none;
  }

  /* 링크 기본 스타일 제거 */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* 버튼 기본 스타일 제거 */
  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  /* 폼 요소 기본 스타일 정리 */
  input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  /* HTML 및 Body 기본 설정 */
  html, body {
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }
`;
