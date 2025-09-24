import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & > label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color};
  }

  & > select {
    font-size: 0.9rem;
    background-color: ${({ theme }) => theme.hover.bgColor};
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 0px;
    color: ${({ theme }) => theme.subColor};
  }
`;

export const Select = ({ label, holder, id, options, disabled, valueProperty }) => {
  const [value, handleValue] = valueProperty;

  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={label} disabled={disabled} value={value} onChange={handleValue}>
        <option value="" disabled hidden={!disabled}>
          {disabled ? holder : `${label}을 선택해주세요`}
        </option>
        {options.map((e, i) => (
          <option key={i} value={e}>
            {e}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};
