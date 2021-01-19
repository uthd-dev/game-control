import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';

function Header () {
    const [userData, setUserData] = useState({});
    async function updateUserData() {
        try{ //Retrieve data from REST API endpoint, on success, update the profile Pic and UserData object, on failure, log the error.
            const response = await axios.get('http://localhost:3000/api/users'); //waits for axios to complete GET request to /api/users, returns an object "user"
            setUserData(response.data.user);
            console.log(userData);
            if(userData.loggedIn == true) {
                document.getElementById("profileImg").src = `${userData.profileImg}`;
                document.getElementById("profileImg").classList.remove("hidden");
                document.getElementById("si-button").classList.add("hidden");
                document.getElementById("headerGreeting").classList.remove("hidden");
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    updateUserData();
    return (
        <HeaderWrapper>
                <title>Game Control | UTHD MC</title>
                <HeaderContentWrapper>
                    <Link href="/"><a><HeaderText>UTHD MC</HeaderText></a></Link>
                    <HeaderMenu>
                        <a href="/auth/twitch"><SignInButton id="si-button"><SignInText>Sign in with Twitch</SignInText></SignInButton></a>
                        <HeaderGreeting id="headerGreeting" className="hidden">Hi, {userData.displayName}!</HeaderGreeting>
                        <HeaderProfileImage id="profileImg" className="hidden"></HeaderProfileImage>
                    </HeaderMenu>
                </HeaderContentWrapper>
            </HeaderWrapper>
    );
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

`;

const HeaderProfileImage = styled.img`
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 100%;
    border: 2px solid #F0524C;
    cursor: pointer;
`;
const HeaderGreeting = styled.h3`
    color: white;
`;
const SignInButton = styled.div`
    background-color: #9146FF;
    height: 38px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
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

const HeaderContentWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default Header;