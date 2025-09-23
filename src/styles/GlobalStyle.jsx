import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @media (min-width: 320px) {
    html { font-size: 10px; }
  }

  @media (min-width: 768px) {
    html { font-size: 12px; }
  }

  @media (min-width: 1024px) {
    html { font-size: 16px; }
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
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
    color: ${({ theme }) => theme.subColor};
  }

  button {
    font-size: 0.9rem;
    border: 0px;
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.themeColor}
  }

  input {
    border: 0px;
  }
`;
