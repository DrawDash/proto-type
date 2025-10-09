import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size : 10px;
  }

  @media (min-width: 768px) { html { font-size: 12px; } }
  @media (min-width: 1024px) { html { font-size: 16px; } }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  *, *::before, *::after {
	margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.themeColor}
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 400;
    color: ${({ theme }) => theme.color}
  }

  span {
    line-height: 1;
  }

  input, button {
    border: 0px;
  }

  button {
	cursor: pointer;
  }
`;
