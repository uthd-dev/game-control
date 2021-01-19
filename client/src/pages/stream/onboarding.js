import Link from 'next/link';
//css-in-js
import styled from 'styled-components';
//Custom react "theme" for consistent "layout"
import Layout from '../../components/layout';

function Onboarding () {

    /* COMPONENT HTML-IN-JS (JSX)*/
    return(
        <Layout>
            <ContentWrapper>
                <ImageWrapper>
                    <Richie src="/home/richie.svg"></Richie>
                </ImageWrapper>
                <OnboardingWrapper>
                    <PageTitle>Almost there!</PageTitle>
                    <PageExcerpt>Your onboarding process has begun!</PageExcerpt><br/>
                    <PageExcerpt>We'll let you know through your Twitch email once you're approved.</PageExcerpt>
                    <Link href="/play/uthd"><a><GoPlayButton><ButtonText>Go Play!</ButtonText></GoPlayButton></a></Link>
                </OnboardingWrapper>
            </ContentWrapper>
        </Layout>
    );
}

/* STYLING (CSS) */

/* PAGE LAYOUT */
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

const OnboardingWrapper = styled.div`
    flex: 2;
    background-color: #101824;

    display: flex;
    flex-direction: column;
    padding: 30px 0 10px 40px;

    box-shadow: -4px 0px 6px 1px rgba(0, 0, 0, 0.35);
`;


/* PAGE CONTENT */
const Richie = styled.img`
    height: 50%;
    min-width: 600px;
    max-width: 100%;
    padding-left: 20px;
`;



const PageTitle = styled.h3`
    color: white;
    font-weight: 800;
    font-size: 80px;
    margin: 0;
`;
const PageExcerpt = styled.p`
    font-size: 24px;
    color: #C4C4C4;
    margin: 20px 15px;
`;
const GoPlayButton = styled.div`
    height: 60px;
    width: 150px;
    margin-top: 20px;
    margin-left: 15px;

    background: #F0524C;
    border-radius: 8px;

    display: flex;
    align-items: center;

    
    :hover {
        box-shadow: 0px 0px 0px 3px #F0524C;
        background: none;
        transition: 150ms;
    }
    transition: 150ms;
`;
const ButtonText = styled.h5`
    font-size: 18px;
    margin: 0 auto;
`;


export default Onboarding;