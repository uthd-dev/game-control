import styled from "styled-components";
import Layout from "../components/layout-components/layout";

import Link from "next/link";

function Home() {
  return (
    <Layout>
      <Canvas>
        <Wrapper>
          <Title>Play along with your favorite streamers</Title>
          <ButtonWrapper>
            <a href={`/api/auth/twitch/?returnTo=/play/uthd?tour=true`}>
              <SignUpButton>Sign Up</SignUpButton>
            </a>
            <Link href={`/how-it-works`}>
              <a>
                <LearnMoreButton>Learn More</LearnMoreButton>
              </a>
            </Link>
          </ButtonWrapper>
        </Wrapper>
      </Canvas>
    </Layout>
  );
}

const Title = styled.h1`
  font-size: 120px;
  text-align: center;
  margin-bottom: 100px;
  color: #ff5953;
  text-shadow: 4px 6px 3px #101824;
  @media only screen and (max-width: 1700px) {
    font-size: 96px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 70px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 55px;
  }
`;

const Wrapper = styled.div`
  float: left;
  width: 75%;

  padding: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1400px) {
    width: 100%;
  }
`;

const Canvas = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: url(/home/gaming-minecraft.webp);
  background-size: cover;

  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
`;

const SignUpButton = styled.div`
  background-color: #9146ff;
  height: 60px;
  width: auto;
  padding: 0 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  margin: 0 40px;

  :hover {
    transform: translateY(-5px);
    transition: 300ms;
    box-shadow: 0px 10px 14px 11px rgba(192, 150, 255, 0.38);
  }
  transition: 300ms;

  @media only screen and (max-width: 1000px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 20px;
    margin: 0 15px;
  }
`;
const LearnMoreButton = styled.div`
  height: 60px;
  width: auto;
  padding: 0 75px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px dotted #ff5953;
  border-radius: 5px;
  color: white;
  margin: 0 40px;

  :hover {
    transform: translateY(-5px);
    transition: 300ms;
    background-color: #ff5953;
    box-shadow: 0px 10px 14px 11px rgba(223, 142, 140, 0.3);
  }
  transition: 300ms;

  @media only screen and (max-width: 1000px) {
    padding: 0 50px;
  }
  @media only screen and (max-width: 700px) {
    padding: 0 15px;
    margin: 0 15px;
  }
`;

export default Home;
