import { memo } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme, $isDisabled }) => ($isDisabled ? theme.bgColor : theme.color)};
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${({ theme, $isDisabled }) => ($isDisabled ? theme.placeholder.color : theme.themeColor)};
  font-size: 0.9rem;
  border: 0px;
`;

export const Button = memo(({ isDisabled = false, content, onClick }) => {
  return (
    <StyledButton onClick={onClick} $isDisabled={isDisabled}>
      {content}
    </StyledButton>
  );
});
