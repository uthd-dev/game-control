import styled from 'styled-components';
import Link from 'next/link';
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function NavLinks() {
  const { data, error } = useSWR("/api/nav/header", fetcher, {
    refreshInterval: 5 * 60 * 1000,
  });

  if (error) return <NavLink>Server Error</NavLink>;
  if (!data?.nav) return <NavLink>Loading...</NavLink>;
  const { nav } = data;
  if (!nav.length > 0) return <NavLink>No links found...</NavLink>;

  return data.nav.map((link) => {
    return (
      <Link href={link.path}>
        <a>
          <NavLink key={link.key}>{link.text}</NavLink>
        </a>
      </Link>
    );
  });
}

/* STYLES */
const NavLink = styled.div`
  min-width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0;

  padding: 10px 20px;
  background: linear-gradient(64.96deg, #111111 0%, rgba(79, 79, 79, 0.2) 100%);
  color: #f5f5f5;
  :hover {
    opacity: 80%;
    transition: 100ms;
  }
  transition: 300ms;
`;
