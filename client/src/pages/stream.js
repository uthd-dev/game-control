import styled from 'styled-components';
import Layout from '../components/layout';

function Home () {
    return(
        <Layout>
            <ContentWrapper>
                <ImageWrapper>
                    <Richie src="/home/richie.svg"></Richie>
                </ImageWrapper>
                <SignUpWrapper>
                    <PageTitle>Like to Stream?</PageTitle>
                    <PageExceprt>Sign Up now to let viewers take control of your game!</PageExceprt>
                    <ButtonContainer>
                        <a href="/auth/twitch"><SignUpButton><SignUpText>SIGN UP</SignUpText></SignUpButton></a>
                        <a><LearnMoreButton><LearnMoreText>LEARN MORE</LearnMoreText></LearnMoreButton></a>
                    </ButtonContainer>
                </SignUpWrapper>
            </ContentWrapper>
        </Layout>
    );
}

const ContentWrapper = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 1;

    display: flex;
    background-color: white;
`;

const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpWrapper = styled.div`
    flex: 2;
    background-color: #101824;

    display: flex;
    flex-direction: column;
    padding: 30px 0 10px 40px;

    box-shadow: -4px 0px 6px 1px rgba(0, 0, 0, 0.35);
`;

const Richie = styled.img`
    height: 50%;
    min-width: 600px;
    max-width: 100%;
    padding-left: 20px;
`;



const PageTitle = styled.h3`
    color: white;
    font-weight: 800;
    font-size: 96px;
    margin: 0;
`;
const PageExceprt = styled.p`
    font-size: 24px;
    color: #C4C4C4;
    margin: 0 15px;
`;

const ButtonContainer = styled.div`
    margin: 20px;
    display: flex;
`;
const SignUpButton = styled.div`
    height: 72px;
    background: #F0524C;
    border-radius: 8px;
    padding: 0 25px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    :hover {
        box-shadow: 0px 0px 0px 3px #F0524C;
        background: none;
        transition: 150ms;
    }
    transition: 150ms;
`;
const LearnMoreButton = styled.div`
    height: 72px;
    border-radius: 8px;
    padding: 0 25px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    box-shadow: 0px 0px 0px 2px #F0524C;
    cursor: pointer;
    transition: 300ms;
`;
const SignUpText = styled.h5`
    margin: 0;
`;
const LearnMoreText = styled.h5`
    margin: 0;
`;
export default Home;