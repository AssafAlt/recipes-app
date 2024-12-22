import { useState } from "react";
import { fetchDataBySearchApi, fetchDataByIdApi } from "../api/api";

export const useApi = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (apiCall, param) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const data = await apiCall(param);
      return data;
    } catch (error) {
      setErrorMessage(
        error.message || "An error occurred while fetching data."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBySearch = (query) => fetchData(fetchDataBySearchApi, query);
  const fetchById = (id) => fetchData(fetchDataByIdApi, id);

  return { isLoading, errorMessage, fetchBySearch, fetchById };
};
