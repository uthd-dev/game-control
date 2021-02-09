import styled from "styled-components";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import NavLinks from './nav'
import TwitchButton from '../twitch-button';

function Header() {
  const [userData, setUserData] = useState({});
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
      document.getElementById("profile-img").src = `${userData.profileImg}`;
      document.getElementById("profile-img").classList.remove("hidden");
      document.getElementById("twitch-button").classList.add("hidden");
      document.getElementById("header-greeting").classList.remove("hidden");
    }
  }, [userData]);

  function profileClickHandler() {
    document.getElementById("header-menu").classList.toggle("hidden");
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
          <HeaderGreeting id="header-greeting" className="hidden">
            Hi, {userData.displayName}!
          </HeaderGreeting>
          <HeaderProfileImage
            id="profile-img"
            className="hidden"
            onClick={profileClickHandler}
          ></HeaderProfileImage>
          <NavMenu id="header-menu" className="hidden">
            <NavLinks />
          </NavMenu>
        </HeaderMenu>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
}

/* STYLES */

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


const HeaderContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
