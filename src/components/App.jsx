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
import { LoadLocalStorage } from "../utils/LoadLocalStorage";

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

  const handleResult = useCallback(async ({ univ, depart, keywords }) => {
    // 스토리지를 통해 임시로 처리하는 로직
    const payload = {
      school_id: LoadLocalStorage(`supportedUniv`).filter((e) => e.name === univ)[0].id,
      department_id: LoadLocalStorage(`supportedDepart`).filter((e) => e.name === depart)[0].id,
      keywords,
    };

    console.log(payload);

    try {
      const result = await generateTopic(payload);
      console.log(result);
    } catch (e) {
      console.error("주제 생성 중 오류 발생", e);
    }
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
