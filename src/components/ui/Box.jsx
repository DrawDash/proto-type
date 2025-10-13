import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.hover.bgColor};
  padding: 1rem;
  border-radius: 0.5rem;

  & > span {
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & > span {
    color: ${({ theme }) => theme.themeColor};
    background-color: ${({ theme }) => theme.color};
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
  }
`;

const Conditions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  & > li {
    color: ${({ theme }) => theme.subColor};
  }
`;

export const Box = ({ problem }) => {
  const { number, type, content, conditions } = problem;
  return (
    <Wrapper>
      <Header>
        <span>{`문제 ${number}`}</span>
        <h6>{type}</h6>
      </Header>
      <p>{content}</p>
      <Conditions>
        {conditions?.map((condition, i) => {
          return <li key={i}>{condition}</li>;
        })}
      </Conditions>
    </Wrapper>
  );
};
