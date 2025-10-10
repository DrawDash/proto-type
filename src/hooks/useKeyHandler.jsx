import { useCallback } from "react";

// 입력된 콜백 함수를 key에 트리거되는 KeyDown 함수로 변환
export const useKeyHandler = (callback, key) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (key.includes(e.key)) {
        e.preventDefault();
        callback(e);
      }
    },
    [callback, key]
  );

  return handleKeyDown;
};
