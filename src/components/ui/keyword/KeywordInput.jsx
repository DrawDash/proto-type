import styled from "styled-components";
import { memo } from "react";

import { Input } from "../Input/Input";
import CloseIcon from "../../../assets/close.svg?react";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const KeywordWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;

  & > span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.subColor};
  }
`;

const Keyword = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.hover.bgColor};
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  gap: 0.2rem;

  & > span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color};
  }
`;

const DeleteIcon = styled.button`
  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.subColor};
    border-radius: 0.5rem;
  }

  & > svg {
    fill: ${({ theme }) => theme.color};
    width: 0.8rem;
    height: 0.8rem;
  }
`;

export const KeywordInput = memo(({ inputObj, keywords, deleteKeywords }) => {
  return (
    <Wrapper>
      <Input inputObj={inputObj} />
      <KeywordWrapper>
        {keywords.length === 0 ? (
          <span>키워드없이 주제 생성이 가능합니다.</span>
        ) : (
          keywords.map((e, i) => {
            return (
              <Keyword key={i}>
                <span>{e}</span>
                <DeleteIcon onClick={() => deleteKeywords(i)}>
                  <CloseIcon />
                </DeleteIcon>
              </Keyword>
            );
          })
        )}
      </KeywordWrapper>
    </Wrapper>
  );
});
