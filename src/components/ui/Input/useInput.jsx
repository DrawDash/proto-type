import { useCallback, useState, useRef } from "react";

export const useInput = (initial) => {
  const [state, setState] = useState(initial);
  const ref = useRef(null);

  const handleState = useCallback((e) => {
    setState(e.target.value);
  }, []);

  return { state, setState, handleState, ref };
};
