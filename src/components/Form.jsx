import styled from "styled-components";

import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  border-radius: 0.6rem;
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & > h2 {
    font-size: 1rem;
    color: ${({ theme }) => theme.color};
  }

  & > span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.subColor};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Form = () => {
  return (
    <Wrapper>
      <FormHeader>
        <h2>미술 주제 추천받기</h2>
        <span>지원하고자 하는 대학교와 학과를 입력하면 맞춤형 입시 미술 주제를 추천해드립니다.</span>
      </FormHeader>
      <InputWrapper>
        <Input label={"대학교"} id={"school-name"} holder={"예: 홍익대학교"} />
        <Input label={"학과"} id={"gwa"} holder={"예: 회화과"} />
      </InputWrapper>
      <Button
        content={"주제 추천 받기"}
        onClick={() => {
          alert("온클릭 !");
        }}
      />
    </Wrapper>
  );
};
