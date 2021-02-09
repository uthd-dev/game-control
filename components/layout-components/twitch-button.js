import { useEffect } from 'react';
import styled from 'styled-components';

export default function TwitchButton ({ returnTo, altText }) {
    let returnToPath = ""

    useEffect(() => {
        returnToPath = returnTo || window.location.pathname;
        document.getElementById("twitch-button-text").innerHTML =
        window.innerWidth < 600 ? altText?.short || "Sign In" : altText?.full || "Log in with Twitch";
    });

    return (
        <a href={`/api/auth/twitch?returnTo=${returnToPath}`}>
            <SignInButton id="twitch-button">
              <SignInText id="twitch-button-text" />
            </SignInButton>
        </a>
    );
}


/* CUSTOM STYLES */
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