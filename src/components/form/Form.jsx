import styled from "styled-components";

import { Input } from "../ui/Input/Input";
import { Button } from "../ui/Button";
import { KeywordInput } from "../ui/keyword/KeywordInput";
import { useKeyHandler } from "../../hooks/useKeyHandler";
import { memo } from "react";

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
const FormComponent = ({ univObj, departObj, keywordObj, keywordsObj, handleResult }) => {
  const { state: univ, handleState: handleUniv, ref: univRef } = univObj;
  const { state: depart, handleState: handleDepart, ref: departRef } = departObj;
  const { state: keyword, setState: setKeyword, handleState: handleKeyword } = keywordObj;
  const { keywords, handleKeywords: addKeyword, deleteKeywords } = keywordsObj;

  // 키워드 추가 함수를 "Enter"에 트리거
  const handleEnterKeywords = useKeyHandler(addKeyword, ["Enter"]);

  const invalidForm = () => univ.length > 0 && depart.length > 0;

  const submitForm = () => {
    if (univ.length === 0) {
      univRef.current.focus();
      return;
    }

    if (depart.length === 0) {
      departRef.current.focus();
      return;
    }

    handleResult();
  };

  console.log("rendering Form");

  return (
    <Wrapper>
      <FormHeader>
        <h4>미술 주제 추천받기</h4>
        <p>지원하고자 하는 대학교와 학과를 입력하면 맞춤형 입시 미술 주제를 추천해드립니다.</p>
      </FormHeader>
      <InputWrapper>
        <Input
          label={"대학교"}
          id={"school-name"}
          holder={"예: 홍익대학교"}
          value={univ}
          onChange={handleUniv}
          ref={univRef}
        />
        <Input
          label={"학과"}
          id={"gwa"}
          holder={"예: 회화과"}
          value={depart}
          onChange={handleDepart}
          ref={departRef}
        />
      </InputWrapper>
      <KeywordInput
        inputProperty={{
          label: "키워드",
          id: "keyword",
          holder: "키워드를 입력하고 Enter로 추가해주세요. (중복 키워드 입력은 불가능합니다)",
          value: keyword,
          onChange: handleKeyword,
          onKeyDown: handleEnterKeywords,
        }}
        keywords={keywords}
        deleteKeywords={deleteKeywords}
      />
      <Button isDisabled={!invalidForm()} content={"주제 추천 받기"} onClick={submitForm} />
    </Wrapper>
  );
};

export const Form = memo(FormComponent);
