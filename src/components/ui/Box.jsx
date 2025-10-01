import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 49%;
  }

  min-height: 8rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  border: 0.1rem solid ${({ theme }) => theme.borderColor};
  border-radius: 0.6rem;
`;

const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    padding: 0.1rem 0.2rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.subColor};

    border: 0.1rem solid ${({ theme }) => theme.borderColor};
    background-color: ${({ theme }) => theme.borderColor};
    border-radius: 0.8rem;
  }
`;

export const Box = ({ title, category, contents }) => {
  return (
    <Wrapper>
      <BoxInfo>
        <h3>{title}</h3>
        <span>{category}</span>
      </BoxInfo>
      <span>{contents}</span>
    </Wrapper>
  );
};
