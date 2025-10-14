import { memo, useEffect, useState, useMemo } from "react";
import styled from "styled-components";

import { Input } from "./Input";
import { useSupportedList } from "./useSupportedList";
import { Select } from "../Select";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SearchList = styled.ul`
  position: absolute;
  top: 105%;
  width: 100%;
  z-index: 100;

  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 0.3rem;
  background-color: ${({ theme }) => theme.themeColor};
  border: 1px solid ${({ theme }) => theme.subColor};
  border-radius: 0.2rem;

  & > li {
    z-index: 101;
    color: ${({ theme }) => theme.color};
    list-style-type: none;
    width: 100%;
    border-radius: 0.2rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }

  & > li:hover {
    background-color: ${({ theme }) => theme.hover.bgColor};
  }
`;

export const SelectInput = memo(({ inputObj, select, getSelect }) => {
  const { state, setState, ref } = inputObj;
  const { supportedList, setSupportedList } = useSupportedList(`supported${select}`, getSelect);
  const [isOpen, setIsOpen] = useState(false);

  const openList = () => setIsOpen(true);
  const closeList = () => setIsOpen(false);
  const selectList = (e) => {
    setState(e.name);
    closeList();
    ref.current.blur();
  };

  const filteredList = useMemo(() => {
    if (!state || state === "") return supportedList;
    const list = supportedList.filter((e) => e.name.includes(state));
    return list.length === 0 ? [{ id: 0, name: "검색 결과가 없습니다" }] : list;
  }, [supportedList, state]);

  return (
    <Wrapper>
      <Input inputObj={{ ...inputObj, onFocus: openList, onBlur: closeList }} />
      <SearchList $isOpen={isOpen} onMouseDown={(e) => e.preventDefault()}>
        {filteredList?.map((e) => {
          return (
            <li key={e.id} onClick={() => selectList(e)}>
              {e.name}
            </li>
          );
        })}
      </SearchList>
    </Wrapper>
  );
});
