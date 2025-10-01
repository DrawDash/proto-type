import { useState } from "react";

import styled, { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/themeStyle";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Header } from "./Header";
import { Form } from "./Form";
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

const mock = [
  {
    title: "제목",
    category: "카테고리",
    contents: "내용",
  },
  {
    title: "제목",
    category: "카테고리",
    contents: "내용",
  },
  {
    title: "제목",
    category: "카테고리",
    contents: "내용",
  },
  {
    title: "제목",
    category: "카테고리",
    contents: "내용",
  },
  {
    title: "제목",
    category: "카테고리",
    contents: "내용",
  },
];

export const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? LightTheme : DarkTheme;
  const [result, setResult] = useState(null);

  // 비동기 api 처리
  const handleResult = () => {};

  return (
    <>
      <GlobalStyle theme={themeStyle} />
      <ThemeProvider theme={themeStyle}>
        <Wrapper>
          <Header />
          <Form />
          <Result result={mock} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
