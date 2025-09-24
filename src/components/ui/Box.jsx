import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const BoxInfo = styled.div`
  display: flex;
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
