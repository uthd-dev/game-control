import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";

function AdminSidebar(props) {
  useEffect(() => {
    let links = document.getElementsByClassName(`link`);
    Array.from(links).forEach((element) => {
      element.classList.remove("sidebar-selected");
    });
    document
      .getElementById(`${window.location.pathname.split("/")[2]}-link`)
      .classList.add("sidebar-selected");
  });

  return (
    <SidebarWrapper>
      <SbTitle>ADMIN</SbTitle>
      <SbLinks>
        <Link href="/admin/dashboard">
          <a>
            <LinkWrapper id="dashboard-link" className="link">
              <SbLink>Dashboard</SbLink>
            </LinkWrapper>
          </a>
        </Link>
        <Link href="/admin/users">
          <a>
            <LinkWrapper id="users-link" className="link">
              <SbLink>Users</SbLink>
            </LinkWrapper>
          </a>
        </Link>
        <Link href="/admin/streamers">
          <a>
            <LinkWrapper id="streamers-link" className="link">
              <SbLink>Streamers</SbLink>
            </LinkWrapper>
          </a>
        </Link>
        <Link href="/admin/servers">
          <a>
            <LinkWrapper id="servers-link" className="link">
              <SbLink>Servers</SbLink>
            </LinkWrapper>
          </a>
        </Link>
        <Link href="/admin/reports">
          <a>
            <LinkWrapper id="reports-link" className="link">
              <SbLink>Reports</SbLink>
            </LinkWrapper>
          </a>
        </Link>
      </SbLinks>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  height: 100vh;
  width: 18vw;
  position: fixed;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: #111;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
`;

const SbTitle = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  margin: 10px;
`;

const SbLinks = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
const LinkWrapper = styled.div`
  width: 90%;
  height: 42px;

  display: flex;
  align-items: center;

  margin: 5px;

  background: #222222;
  box-sizing: border-box;
  border-radius: 0px 12px 12px 0px;
  :hover {
    box-shadow: 2px 3px 2px rgba(75, 75, 75, 0.6);
  }
`;
const SbLink = styled.h5`
  margin: 0;
  margin-left: 10px;
  font-size: 15px;
`;

export default AdminSidebar;
