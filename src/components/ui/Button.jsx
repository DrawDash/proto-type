import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #777777;
`;

export const Button = ({ content, onClick }) => {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
};
