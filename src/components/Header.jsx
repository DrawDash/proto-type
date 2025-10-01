import styled from "styled-components";
import MainIcon from "../assets/main.svg?react";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    font-size: 1rem;
    word-spacing: 0.2rem;
    font-weight: 300;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  & > h1 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }

  & > svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: ${({ theme }) => theme.color};
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <MainIcon />
        <h1>DrawMade</h1>
      </StyledHeader>
      <span>AI 기반 입시 미술 주제 추천 서비스</span>
    </Wrapper>
  );
};
