import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";
import { useSession, signIn, signOut } from "next-auth/client";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function NavLinks() {
  const { data, error } = useSWR("/api/nav/header", fetcher);

  if (error) return <NavLink>Error loading nav</NavLink>;

  if (!data?.nav) return <NavLink>Loading...</NavLink>;

  return (
    <>
      <DynamicLinks data={data} />
      <NavLink onClick={() => signOut()}>Logout</NavLink>
    </>
  );
}

function DynamicLinks({ data }) {
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

  cursor: pointer;
`;
