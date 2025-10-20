const API_TARGET = import.meta.env.VITE_API_ENDPOINT;

export const generateTopic = async (payload) => {
  const url = `${API_TARGET}/api/topics/generate/`;
  console.log("API : generateTopic");

  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`API 통신 실패: ${response.status} (${response.statusText})`);
    }

    return await response.json();
  } catch (err) {
    console.error("generateTopic 호출 중 오류 발생: ", err);
    return null;
  }
};

export const getUniv = async () => {
  const url = `${API_TARGET}/api/schools`;
  console.log("API : getUniv");

  try {
    const response = await fetch(url, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`API 통신 실패: ${response.status} (${response.statusText})`);
    }

    return await response.json();
  } catch (err) {
    console.error("getUniv 호출 중 오류 발생: ", err);
    return null;
  }
};

export const getDepart = async () => {
  const url = `${API_TARGET}/api/schools/1/departments/`;

  try {
    const response = await fetch(url, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`API 통신 실패: ${response.status} (${response.statusText})`);
    }

    return await response.json();
  } catch (err) {
    console.error("getUniv 호출 중 오류 발생: ", err);
    return null;
  }
};
