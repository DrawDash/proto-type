import { useState, useMemo, useCallback } from "react";

import styled, { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyle";

import { Header } from "./Header";
import { Form } from "./form/Form";
import { Result } from "./Result";
import { useInput } from "./ui/Input/useInput";
import { useKeyword } from "./ui/keyword/useKeyword";
import { generateTopic, getUniv } from "../api/api";

const Wrapper = styled.div`
  max-width: 50rem;
  min-width: 32rem;
  margin: 0 auto;
  padding: 3rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [result, setResult] = useState(null);

  const handleResult = useCallback(() => {
    const payload = {
      school_id: 1,
      department_id: 1,
      keywords,
    };

    // const result = generateTopic(payload).then((res));
    // const result = getUniv().then((res) => {
    //   console.log(res);
    // });
    console.log(result);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Form handleResult={handleResult} />
          <Result />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
