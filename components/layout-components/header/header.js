import styled from "styled-components";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import TwitchButton from '../twitch-button';

function Header() {
  const [userData, setUserData] = useState({});
  const [navLinks, setNavLinks] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/users/self`)
      .then((res) => {
        if(res.data.user) setUserData(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (userData.loggedIn) {
      axios
        .get(`/api/nav/header`)
        .then((res) => {
          setNavLinks(res.data.nav);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userData]);

  useEffect(() => {
    if (userData.loggedIn) {
      document.getElementById("profileImg").src = `${userData.profileImg}`;
      document.getElementById("profileImg").classList.remove("hidden");
      document.getElementById("twitch-button").classList.add("hidden");
      document.getElementById("headerGreeting").classList.remove("hidden");
    }
  }, [userData]);

  function profileClickHandler() {
    document.getElementById("dd-menu").classList.toggle("hidden");
  }
  return (
    <HeaderWrapper>
      <title>Game Control | UTHD MC</title>
      <HeaderContentWrapper>
        <Link href="/">
          <a>
            <HeaderText>UTHD MC</HeaderText>
          </a>
        </Link>
        <HeaderMenu>
          <TwitchButton />
          <HeaderGreeting id="headerGreeting" className="hidden">
            Hi, {userData.displayName}!
          </HeaderGreeting>
          <HeaderProfileImage
            id="profileImg"
            className="hidden"
            onClick={profileClickHandler}
          ></HeaderProfileImage>
          <NavMenu id="dd-menu" className="hidden">
            <NavLinks navLinks={navLinks} fallback={"Loading..."} />
          </NavMenu>
        </HeaderMenu>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
}

function NavLinks({ navLinks, fallback }) {
  if (!navLinks.length == 0) {
    return navLinks.map((item) => {
      return (
        <Link href={item.href}>
          <a>
            <NavLink key={item.key}>{item.text}</NavLink>
          </a>
        </Link>
      );
    });
  }else return fallback;
}

const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  background-color: #000000;

  position: -webkit-sticky;
  position: sticky;
  top: 0;

  z-index: 12;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderText = styled.h1`
  @media only screen and (max-width: 1400px) {
    font-size: 36px;
    font-weight: 800;
  }
`;

const HeaderProfileImage = styled.img`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 100%;
  border: 2px solid #f0524c;
  cursor: pointer;
  :hover {
    opacity: 75%;
    transition: 200ms;
  }
`;
const HeaderGreeting = styled.h3`
  color: white;
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
`;

const NavMenu = styled.div`
  position: absolute;

  height: auto;
  min-width: 200px;
  background-color: red;
  z-index: 150;
  top: 80px;
  right: 20px;

  border-radius: 0 0 8px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: beginning;
  overflow: hidden;
`;
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

const HeaderContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
