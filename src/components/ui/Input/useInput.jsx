import { useCallback, useState, useRef, useMemo } from "react";

export const useInput = (initial) => {
  const [state, setState] = useState(initial);
  const ref = useRef(null);

  const handleState = useCallback((e) => {
    setState(e.target.value);
  }, []);

  return useMemo(() => {
    return { state, setState, handleState, ref };
  }, [state, setState, handleState, ref]);
};
