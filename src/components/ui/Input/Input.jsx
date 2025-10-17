import styled from "styled-components";
import { memo } from "react";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  & > label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color};
  }

  & > input {
    min-height: 2rem;
    width: 100%;
    background-color: ${({ theme }) => theme.hover.bgColor};
    padding-left: 0.5rem;
    border-radius: 0.3rem;
    border: ${({ $isValid }) => ($isValid === false ? "0.1rem solid red" : "")};
    outline-color: ${({ $isValid }) => ($isValid === false ? "red" : "")};

    &::placeholder {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.subColor};
    }
  }
`;

export const Input = memo(({ inputObj }) => {
  const { label, holder, id, state, handleState, onKeyDown, onFocus, onBlur, ref, isValid = true } = inputObj;

  return (
    <Wrapper $isValid={isValid || state === ""}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={holder}
        value={state}
        onChange={handleState}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
      />
    </Wrapper>
  );
});
