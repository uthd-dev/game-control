import { useEffect } from 'react';
import { signIn } from 'next-auth/client';
import styled from 'styled-components';

export default function TwitchButton ({ altText }) {
    useEffect(() => {
        document.getElementById("twitch-button-text").innerHTML =
        window.innerWidth < 600 ? altText?.short || "Sign In" : altText?.full || "Log in with Twitch";
    });

    return (
        <a onClick={() => signIn("twitch")}>
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
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  cursor: pointer;

  :hover {
    opacity: 90%;
    transition: 200ms;
  }

  transition: 300ms;
`;

const SignInText = styled.h5`
  margin: 0;
  font-size: 15px;
`;