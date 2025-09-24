import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #777777;
  cursor: pointer;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.themeColor};
  font-size: 0.9rem;

  &:hover {
    background-color: ${({ theme }) => theme.subColor};
  }
`;

export const Button = ({ content, onClick }) => {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
};
