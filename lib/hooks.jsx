import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useUser() {
  const { data, error } = useSWR(`/api/user`, fetcher);
  return {
    userData: data,
    isLoading: !error && !data,
    isError: error,
  };
}
