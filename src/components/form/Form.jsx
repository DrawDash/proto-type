import styled from "styled-components";
import { memo, useState } from "react";

import { Button } from "../ui/Button";
import { KeywordInput } from "../ui/keyword/KeywordInput";
import { SelectInput } from "../ui/Input/SelectInput";

import { useKeyHandler } from "../../hooks/useKeyHandler";
import { useInput } from "../ui/Input/useInput";
import { useKeyword } from "../ui/keyword/useKeyword";
import { getDepart, getUniv } from "../../api/api";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  border-radius: 0.6rem;
`;

const FormHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & > p {
    color: ${({ theme }) => theme.subColor};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const Form = memo(({ handlePayload, isLoading }) => {
  const univObj = useInput("");
  const { state: univ, univRef } = univObj;
  const [isValidUniv, setIsValidUniv] = useState(false);

  const departObj = useInput("");
  const { state: depart, departRef } = departObj;
  const [isValidDepart, setIsValidDepart] = useState(false);

  const keywordObj = useInput("");
  const { state: keyword, setState: setKeyword } = keywordObj;

  const keywordsObj = useKeyword(keyword, setKeyword);
  const { keywords, handleKeywords, deleteKeywords } = keywordsObj;

  const handleEnterKeywords = useKeyHandler(handleKeywords, ["Enter"]);
  const isDisabledButton = () => !(isValidUniv && isValidDepart);

  return (
    <Wrapper>
      <FormHeader>
        <h4>미술 주제 추천받기</h4>
        <p>지원하고자 하는 대학교와 학과를 입력하면 맞춤형 입시 미술 주제를 추천해드립니다.</p>
      </FormHeader>
      <InputWrapper>
        <SelectInput
          inputObj={{
            label: "대학교",
            id: "univ",
            holder: "예: 서울대",
            ...univObj,
          }}
          select={"Univ"}
          getSelect={getUniv}
          submitIsVaild={setIsValidUniv}
        />
        <SelectInput
          inputObj={{
            label: "학과",
            id: "depart",
            holder: "예: 서양학과",
            ...departObj,
          }}
          select={"Depart"}
          getSelect={getDepart}
          submitIsVaild={setIsValidDepart}
        />
      </InputWrapper>
      <KeywordInput
        inputObj={{
          label: "키워드",
          id: "keyword",
          holder: "키워드를 입력하고 Enter로 추가하세요. (중복 키워드는 불가능합니다)",
          onKeyDown: handleEnterKeywords,
          ...keywordObj,
        }}
        keywords={keywords}
        deleteKeywords={deleteKeywords}
      />
      <Button
        isDisabled={isDisabledButton()}
        content={"주제 추천 받기"}
        onClick={() => handlePayload(univ, depart, keywords)}
        isLoading={isLoading}
      />
    </Wrapper>
  );
});
