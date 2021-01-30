import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Header () {
    const [userData, setUserData] = useState({});
    
    useEffect(async () => {
        await axios.get(`/api/users`)
        .then(res => {
            setUserData(res.data.user)
        })
        .catch(err => {
            console.log(err)
        });
    }, []);

    useEffect(() => {
        if(userData.loggedIn == true) {
            document.getElementById("profileImg").src = `${userData.profileImg}`;
            document.getElementById("profileImg").classList.remove("hidden");
            document.getElementById("si-button").classList.add("hidden");
            document.getElementById("headerGreeting").classList.remove("hidden");
        }else{
            document.getElementById("si-text").innerHTML = window.innerWidth < 600 ? "Sign In": "Sign in with Twitch"
        }
    });

    function profileClickHandler() {
        document.getElementById("dd-menu").classList.toggle("hidden");

    }
    return (
        <HeaderWrapper>
                <title>Game Control | UTHD MC</title>
                <HeaderContentWrapper>
                    <Link href="/"><a><HeaderText>UTHD MC</HeaderText></a></Link>
                    <HeaderMenu>
                        <a href="/auth/twitch"><SignInButton id="si-button"><SignInText id="si-text">Log in with Twitch</SignInText></SignInButton></a>
                        <HeaderGreeting id="headerGreeting" className="hidden">Hi, {userData.displayName}!</HeaderGreeting>
                        <HeaderProfileImage id="profileImg" className="hidden" onClick={profileClickHandler}></HeaderProfileImage>
                        <Menu id="dd-menu" className="hidden">
                            <Link href="/auth/logout"><a><LogOut>Log Out</LogOut></a></Link>
                        </Menu>
                    </HeaderMenu>
                </HeaderContentWrapper>
            </HeaderWrapper>
    );
}

const Menu = styled.div`
    position: absolute;

    height: 400px;
    min-width: 200px;
    background-color: red;
    z-index: 150;
    top: 80px;
    right: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: beginning;
`;

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
    font-size: 32px;
}
`;

const HeaderProfileImage = styled.img`
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 100%;
    border: 2px solid #F0524C;
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
    background-color: #9146FF;
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
`;

const LogOut = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 20px;
    background: gray;
    color: white;
`;

const HeaderContentWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Header;