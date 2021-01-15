//Component Imports
import Link from 'next/link';
import Layout from '../../components/layout';

//Useful Stuff Imports
import styled from 'styled-components';
import axios from 'axios';

function StreamerGameControl (props) {
    return (
        <Layout>
            <ContentWrapper>
                <StreamerSidebar>

                </StreamerSidebar>
                <PrimaryWrapper>
                    <Twitch>

                    </Twitch>
                    <GameControl>
                        <ButtonOne></ButtonOne>
                        <ButtonTwo></ButtonTwo>
                        <ButtonThree></ButtonThree>
                        <ButtonFour></ButtonFour>
                    </GameControl>
                    <Info>
                        <p>Current Shards: 100</p>
                    </Info>
                </PrimaryWrapper>
            </ContentWrapper>
        </Layout>
    );
}

const ContentWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    z-index: 1;

    display: flex;
    background-color: #101824;
`;

const StreamerSidebar = styled.div`
    height: 100%;
    min-width: 72px;
    z-index: 5;
    background-color: #1F2A39;
`;
const PrimaryWrapper = styled.div`
    height: 100%;
    max-width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`; 

const Twitch = styled.div`
    width: 1480px;
    min-width: 840px;
    height: 720px;
    background-color: gray;
    margin: 20px;
`;
const GameControl = styled.div`
    diaply: flex;
`;
const Info = styled.div`

`;

const ButtonOne = styled.div`
    margin: 20px;
    height: 200px;
    width: 200px;
    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);
    border-radius: 8px;
    cursor: pointer;
`;
const ButtonTwo = styled.div`
    margin: 20px;
    height: 200px;
    width: 200px;
    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);
    border-radius: 8px;
`;
const ButtonThree = styled.div`
    margin: 20px;
    height: 200px;
    width: 200px;
    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);
    border-radius: 8px;
`;
const ButtonFour = styled.div`
    margin: 20px;
    height: 200px;
    width: 200px;
    background: linear-gradient(225deg, #8C2AD9 0%, rgba(21, 210, 199, 0.85) 100%);
    border-radius: 8px;
`;


//Props getting
/*
export async function getStaticPaths() {
    const paths = await getAllPageSlugs();
    return {
        fallback: 'blocking',
        paths
    }
  }

export async function getStaticProps({ params }) {
    const pageData = await getPageDataFromSlug(params.slug);
    return {
        revalidate: 5,
        props: {pageData}
    }
}

async function getAllPageSlugs () {
    const pages = await getPages();
    return pages.map(page => {
        return {
            params: {
                slug: page.slug
            }
        }
    })
}*/

export default StreamerGameControl;