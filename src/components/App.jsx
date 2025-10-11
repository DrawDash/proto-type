import { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Header } from "./Header";
import { Form } from "./form/Form";
import { Result } from "./Result";

const Wrapper = styled.div`
  max-width: 50rem;
  min-width: 32rem;
  margin: 0 auto;
  padding-top: 3rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const App = () => {
  const [theme, setTheme] = useState("light");
  const themeObject = theme === "light" ? LightTheme : DarkTheme;
  const [result, setResult] = useState(null);

  // 비동기 api 처리
  const handleResult = () => {};

  return (
    <>
      <ThemeProvider theme={themeObject}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Form />
          <Result />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
