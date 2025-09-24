import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & > label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color};
  }

  & > input {
    font-size: 0.9rem;
    background-color: ${({ theme }) => theme.hover.bgColor};
    padding: 0.5rem 3rem 0.5rem 1rem;
    border-radius: 0.3rem;

    &::placeholder {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.subColor};
    }
  }
`;

export const Input = ({ label, holder, id, onChange }) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input id={id} placeholder={holder} onChange={onChange} />
    </Wrapper>
  );
};
