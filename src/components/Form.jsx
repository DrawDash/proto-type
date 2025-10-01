import styled from "styled-components";

import { useState } from "react";

import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Select } from "./ui/Select";

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

  & > h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color};
  }

  & > span {
    font-size: 1rem;
    color: ${({ theme }) => theme.subColor};
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const Form = () => {
  const [univ, setUniv] = useState("");
  const [depart, setDepart] = useState("");
  const [category, setCategory] = useState("");

  const handleUniv = (e) => {
    setUniv(e.target.value);
  };

  const handleDepart = (e) => {
    setDepart(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const isFilled = () => univ.length > 0 && depart.length > 0;

  return (
    <Wrapper>
      <FormHeader>
        <h2>미술 주제 추천받기</h2>
        <span>지원하고자 하는 대학교와 학과를 입력하면 맞춤형 입시 미술 주제를 추천해드립니다.</span>
      </FormHeader>
      <InputWrapper>
        <Input label={"대학교"} id={"school-name"} holder={"예: 홍익대학교"} onChange={handleUniv} />
        <Input label={"학과"} id={"gwa"} holder={"예: 회화과"} onChange={handleDepart} />
      </InputWrapper>
      <Select
        label={"카테고리"}
        holder={"대학교와 학과를 먼저 입력해주세요"}
        id={"category"}
        options={["a", "b", "c"]}
        disabled={!isFilled()}
        valueProperty={[category, handleCategory]}
      />
      <Button
        content={"주제 추천 받기"}
        onClick={() => {
          alert("온클릭 !");
        }}
      />
    </Wrapper>
  );
};
