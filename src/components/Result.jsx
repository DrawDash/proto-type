import styled from "styled-components";
import { useState } from "react";

import { Box } from "./ui/Box";
import mockData from "../assets/mock/data.json";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;

  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  border-radius: 0.6rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Keyword = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  & > span {
    background-color: ${({ theme }) => theme.hover.bgColor};
    color: ${({ theme }) => theme.color};
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Result = () => {
  const data = JSON.parse(JSON.stringify(mockData));

  //   console.log(data);
  return (
    <Wrapper>
      <Header>
        <h3>{data.title}</h3>
        <span>{`${data.school_name}·${data.department_name}`}</span>
      </Header>
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
    </Wrapper>
  );
};
