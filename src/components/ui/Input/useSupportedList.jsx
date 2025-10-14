import { useEffect, useMemo, useState } from "react";
import { getUniv } from "../../../api/api";
import { LoadLocalStorage } from "../../../utils/LoadLocalStorage";

export const useSupportedList = (key, getSelect) => {
  const [supportedList, setSupportedList] = useState(() => {
    return LoadLocalStorage(key);
  });

  useEffect(() => {
    if (supportedList) return;

    const fetchData = async () => {
      try {
        const data = await getSelect();
        setSupportedList(data);
        window.localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        console.error("데이터 로드 중 오류 발생", e);
      }
    };

    fetchData();
  }, [supportedList]);

  const supportObj = useMemo(() => {
    return { supportedList, setSupportedList };
  }, [supportedList]);

  return supportObj;
};
