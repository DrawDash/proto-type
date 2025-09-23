import { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/themeStyle";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Header } from "./Header";
import { Form } from "./Form";

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? LightTheme : DarkTheme;

  return (
    <>
      <GlobalStyle theme={themeStyle} />
      <ThemeProvider theme={themeStyle}>
        <Wrapper>
          <Header />
          <Form />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
