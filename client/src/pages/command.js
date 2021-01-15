import styled from 'styled-components';

export default function Command () {
    return(
        <Page>
            <a href="/command?command=kill"><Button><ButtonText>Kill UTHD</ButtonText></Button></a>
        </Page>
    );
}

const Page = styled.div`
    background-color: black;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    width: 240px;
    height: 50px;
    background-color: #F0524C;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Montserrat';
    :hover {
        background-color: black;
        box-shadow: 0px 0px 0px 3px #F0524C;
        transition: 300ms;
    }
    transition: 300ms;
`;

const ButtonText = styled.p`
    color: white;
`;