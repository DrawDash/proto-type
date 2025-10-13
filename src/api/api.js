export const generateTopic = async (payload) => {
  const url = "/api/topics/generate/";

  console.log(url);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.log(response);
    return null;
  }

  return await response.json();
};

export const getUniv = async () => {
  const url = "/api/schools/";

  const response = await fetch(url);

  if (!response.ok) {
    console.log(response);
    return null;
  }

  return await response.json();
};
