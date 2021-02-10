import styled from 'styled-components';
import {
    useSession, signIn, signOut
  } from 'next-auth/client'

import TwitchButton from '../twitch-button';
import NavLinks from './nav';

export default function HeaderMenuComponent() {
    const [ session, loading ] = useSession();

    function hideMenu() {
        document.getElementById("header-menu").classList.add("opacity-hidden");
    }
    function toggleMenu() {
        document.getElementById("header-menu").classList.toggle("opacity-hidden");
    }

    if(loading) return (
        <HeaderProfileImage
            id="profile-img"
            src="https://media.giphy.com/media/4EFt4UAegpqTy3nVce/giphy.gif" 
          ></HeaderProfileImage>
    );

    if(session) return(
            <HeaderMenu>
              <HeaderGreeting id="header-greeting">
                Hi, {session.user.name}!
              </HeaderGreeting>
              <HeaderProfileImage
                id="profile-img"
                src={session.user.image || "https://media.giphy.com/media/4EFt4UAegpqTy3nVce/giphy.gif"}
                onClick={toggleMenu}
              ></HeaderProfileImage>
              <NavMenu id="header-menu" className="opacity-hidden" onMouseLeave={hideMenu}>
                <NavLinks />
              </NavMenu>
            </HeaderMenu>
    );
    
    return <TwitchButton />

}

/* STYLES */

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

  transition: 200ms;
`;