import styled from "styled-components";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [userData, setUserData] = useState({});
  const [navLinks, setNavLinks] = useState();
  const [returnTo, setReturnTo] = useState();
  useEffect(async () => {
    await axios
      .get(`/api/users`)
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(async () => {
    await axios
      .get(`/api/nav`)
      .then((res) => {
        setNavLinks(res.data.nav);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (userData.loggedIn == true) {
      document.getElementById("profileImg").src = `${userData.profileImg}`;
      document.getElementById("profileImg").classList.remove("hidden");
      document.getElementById("si-button").classList.add("hidden");
      document.getElementById("headerGreeting").classList.remove("hidden");
    } else {
      setReturnTo(window.location.pathname);
      document.getElementById("si-text").innerHTML =
        window.innerWidth < 600 ? "Sign In" : "Sign in with Twitch";
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
          <a href={`/auth/twitch?returnTo=${returnTo}`}>
            <SignInButton id="si-button">
              <SignInText id="si-text">Log in with Twitch</SignInText>
            </SignInButton>
          </a>
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
  if (!navLinks || navLinks.length === 0) {
    return fallback;
  } else {
    return navLinks.map((item) => {
      return (
        <Link href={item.href}>
          <a>
            <NavLink key={item.key}>{item.text}</NavLink>
          </a>
        </Link>
      );
    });
  }
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
const SignInButton = styled.div`
  background-color: #9146ff;
  height: 44px;
  width: auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  :hover {
  }
`;
const SignInText = styled.h5`
  margin: 0;
  font-size: 15px;
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
`;

const HeaderContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
