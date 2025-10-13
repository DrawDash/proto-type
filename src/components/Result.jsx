import styled from "styled-components";
import { useState } from "react";

import { Box } from "./ui/Box";
import LibIcon from "../assets/library.svg?react";
import mockData from "../assets/mock/data.json";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;

  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  border-radius: 0.6rem;
  font-size: 0.9rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  & > p {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    color: ${({ theme }) => theme.subColor};
  }

  & > p svg {
    fill: ${({ theme }) => theme.color};
    width: 1rem;
    height: 1rem;
  }
`;

const Keyword = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.borderColor};
  padding-bottom: 1.5rem;

  & > span {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.hover.bgColor};
    color: ${({ theme }) => theme.color};
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 0.5rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.borderColor};
  padding-bottom: 1.5rem;
`;

const General = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > :first-child {
    border-bottom: 0.1rem solid ${({ theme }) => theme.borderColor};
    padding-bottom: 1.5rem;
  }

  & > :last-child {
    padding-top: 0.5rem;
  }
`;

export const Result = () => {
  const data = JSON.parse(JSON.stringify(mockData));
  console.log(data);
  return (
    <Wrapper>
      <Content>
        <h4>{data.title}</h4>
        <p>
          <LibIcon />
          {`${data.school_name}·${data.department_name}`}
        </p>
      </Content>
      <Content>
        <h5>출제 의도</h5>
        <p>{data.context}</p>
      </Content>
      <Keyword>
        {data.keywords &&
          data.keywords.map((keyword, i) => {
            return <span key={i}>{keyword}</span>;
          })}
      </Keyword>
      <Detail>
        {data.problems &&
          data.problems.map((problem, i) => {
            return <Box key={i} problem={problem} />;
          })}
      </Detail>
      <General>
        <div>
          <h5>평가 기준</h5>
          <ul>
            {data.general_info.evaluation_criteria?.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </div>
        <div>
          <h5>유의 사항</h5>
          <ul>
            {data.general_info.notes?.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        </div>
      </General>
    </Wrapper>
  );
};
