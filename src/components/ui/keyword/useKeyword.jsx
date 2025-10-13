import { useState, useCallback, useMemo } from "react";

// 키워드 관리 훅
export const useKeyword = (keyword, setKeyword) => {
  const [keywords, setKeywords] = useState([]);

  // 키워드 삽입
  const handleKeywords = useCallback(() => {
    if (keywords.includes(keyword)) {
      alert("중복된 키워드입니다.");
      return;
    }
    setKeywords((prev) => [...prev, keyword]);
    setKeyword("");
  }, [keyword, setKeyword, keywords]);

  // 키워드 제거
  const deleteKeywords = useCallback((target) => {
    setKeywords((prev) => [...prev.filter((_, i) => i !== target)]);
  }, []);

  return useMemo(() => {
    return { keywords, setKeywords, handleKeywords, deleteKeywords };
  }, [keywords, setKeywords, handleKeywords, deleteKeywords]);
};
