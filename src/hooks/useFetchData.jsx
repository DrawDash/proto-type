import { useEffect, useState } from "react";

export const useFetchData = (fetch) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setResult(null);

    const excuteFetch = async () => {
      try {
        const result = await fetch();
        if (result) {
          setResult(result);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    excuteFetch();
  }, [fetch]);

  return { isLoading, result };
};
