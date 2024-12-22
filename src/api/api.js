const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_FORKIFY_API}/${endpoint}`);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    if (data?.results === 0) {
      throw new Error("There is no data!");
    }
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const fetchDataBySearchApi = async (query) => {
  return await fetchData(
    `?search=${query}&key=${process.env.REACT_APP_FORKIFY_API_KEY}`
  );
};

export const fetchDataByIdApi = async (id) => {
  return await fetchData(id);
};
