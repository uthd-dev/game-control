import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function HeaderMenu() {
    const url = '/api/users/self';

    const { data, error } = useSWR(url, fetcher);

    if(error) return  

}