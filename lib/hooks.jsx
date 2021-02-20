import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useHook() {
  const { data, error } = useSWR(`/api/`, fetcher);
  return {
    reports: data,
    isLoading: !error && !data,
    isError: error,
  };
}
