export const LoadLocalStorage = (key) => {
  try {
    const res = window.localStorage.getItem(key);
    return res ? JSON.parse(res) : null;
  } catch (e) {
    console.error("로컬 스토리지 데이터를 읽거나 파싱하는 과정에서 오류 발생", error);
    return null;
  }
};
