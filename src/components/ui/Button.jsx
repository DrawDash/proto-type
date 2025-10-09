import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #777777;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.themeColor};
  font-size: 0.9rem;
  border: 0px;

  &:hover {
    background-color: ${({ theme, disabled }) => (disabled ? "#777777" : theme.subColor)};
  }
`;

export const Button = ({ disabled, content, onClick }) => {
  const disabledFunc = () => {
    alert("필수 요소를 입력해주세요!");
  };
  console.log(disabled);
  return (
    <StyledButton onClick={disabled ? disabledFunc : onClick} disabled={disabled}>
      {content}
    </StyledButton>
  );
};
