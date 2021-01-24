//Component Imports
import Link from 'next/link';
import ButtonHelp from '../../components/buttonHelp';
import ButtonHurt from '../../components/buttonHurt';
import Layout from '../../components/layout';
import StreamerSidebar from '../../components/streamerSidebar';

//Useful Stuff Imports
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

function StreamerGameControl (props) {
    const [userData, setUserData] = useState({});
    useEffect(() => {
        axios.get(`/api/users`)
        .then(res => {
            setUserData(res.data.user);
            if(userData.loggedIn == true) {
                document.getElementById("profileImg").src = `${userData.profileImg}`;
                document.getElementById("profileImg").classList.remove("hidden");
                document.getElementById("si-button").classList.add("hidden");
            }
        }).catch(err => {console.log(err)});
        
    }, []);
    return (
        <Layout>
            <StreamerSidebar>

            </StreamerSidebar>
            <ContentWrapper>
                
                <RowOneWrapper>
                    <Twitch>
                        <TwitchEmbed 
                            channel="uthd"
                            id="uthd"
                            muted
                            theme="dark"
                            height="100%"
                            width="100%"
                        />
                    </Twitch>
                </RowOneWrapper>
                <RowTwoWrapper>
                    <GameControl>
                        <ButtonHelp title="Enchant Held Item" action="enchant"></ButtonHelp>
                        <ButtonHelp title="Heal Player" action="heal-player"></ButtonHelp>
                        <ButtonHelp title="Give Item" action="give-item"></ButtonHelp>
                        <ButtonHelp title="Give Helpful Potion Effect" action="good-potion"></ButtonHelp>
                        <ButtonHurt title="Give Annoying Potion Effect" action="bad-potion"></ButtonHurt>
                        <ButtonHurt title="Clear Inventory" action="clear-inv"></ButtonHurt>
                        <ButtonHurt title="Summon Mob" action="summon-mob"></ButtonHurt>
                        <ButtonHurt title="etc."></ButtonHurt> 
                    </GameControl>
                </RowTwoWrapper>
                <RowThreeWrapper>
                    <Stats>
                        <h3>User Info</h3>
                        <h5><span>Shards:</span>   Loading...</h5>
                    </Stats>
                    <Leaderboard>
                        <h3>Leaderboard</h3>
                        <h5><span>Top Player: </span>Loading...</h5>
                    </Leaderboard>
                </RowThreeWrapper>
            </ContentWrapper>
        </Layout>
    );
    
}

const ContentWrapper = styled.div`
    min-height: calc(100vh - 80px);
    width: calc(100vw - 72px);
    margin-left: 72px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
const RowOneWrapper = styled.div`
    min-height: 800px;
    width: 80vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 0;
`; 
const RowTwoWrapper = styled.div`
    justify-content: center;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;

    margin: 0;
`;
const RowThreeWrapper = styled.div`
    width: 100%;
    justify-content: center;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
`;

const Twitch = styled.div`
    width: 80vw;
    height: 720px;
    background-color: gray;
    margin: 20px;
`;
const GameControl = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-self: left;
`;
const Stats = styled.div`
    min-height: 500px;
    min-width: 300px;

    box-shadow: 0px 0px 0px 3px #F0524C;
    border-radius: 8px;
    background: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
    h3 {
        text-align: center;
        font-size: 36px;
        margin: 0 auto;
    }
    h5 {
        text-align: center;
        font-size: 20px;
        margin: 0 auto;
        font-weight: 200;
    }
    span {
        font-size: 24px;
        font-weight: 600;
    }
`;
const Leaderboard = styled.div`
    min-height: 500px;
    min-width: 300px;

    box-shadow: 0px 0px 0px 3px #F0524C;
    border-radius: 8px;
    background: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
    h3 {
        text-align: center;
        font-size: 36px;
        margin: 0 auto;
    }
    h5 {
        text-align: center;
        font-size: 20px;
        margin: 0 auto;
        font-weight: 200;
    }
    span {
        font-size: 24px;
        font-weight: 600;
    }
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