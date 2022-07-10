import React from "react";
import useSWR from "swr";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useFetch = (url) => {
  const { data, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
