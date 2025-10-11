import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;

export const Box = ({ problem }) => {
  const { number, type, content, conditions } = problem;
  return (
    <Wrapper>
      <Header>
        <span>{number}</span>
        <h3>{type}</h3>
      </Header>
      <span>{content}</span>
      {conditions &&
        conditions.map((condition, i) => {
          return <p key={i}>{condition}</p>;
        })}
    </Wrapper>
  );
};
