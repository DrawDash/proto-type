import styled from "styled-components";
import { memo } from "react";

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

// 여러개의 사용자 입력을 관리하고 제출하는 폼 컴포넌트
export const Form = memo(({ handleResult }) => {
  const univObj = useInput("");
  const { state: univ, univRef } = univObj;

  const departObj = useInput("");
  const { state: depart, departRef } = departObj;

  const keywordObj = useInput("");
  const { state: keyword, setState: setKeyword } = keywordObj;

  const keywordsObj = useKeyword(keyword, setKeyword);
  const { keywords, handleKeywords, deleteKeywords } = keywordsObj;

  // 키워드 추가 함수를 "Enter"에 트리거
  const handleEnterKeywords = useKeyHandler(handleKeywords, ["Enter"]);

  const invalidForm = () => univ.length > 0 && depart.length > 0;

  const submitForm = () => {
    handleResult();
  };

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
      <Button isDisabled={!invalidForm()} content={"주제 추천 받기"} onClick={submitForm} />
    </Wrapper>
  );
});
