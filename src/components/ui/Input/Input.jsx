import styled from "styled-components";
import { memo } from "react";

const Wrapper = styled.div`
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

    &::placeholder {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.subColor};
    }
  }
`;

export const Input = memo(({ label, holder, id, value, onChange, onKeyDown, ref }) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={holder} value={value} onChange={onChange} onKeyDown={onKeyDown} ref={ref} />
    </Wrapper>
  );
});
