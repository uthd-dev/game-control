import styled from 'styled-components';
import axios from 'axios';
let userData = {};

function Layout ({children}) {
    updateUserData();
    return(
        <PageWrapper>
            <Header>
                <HeaderContentWrapper>
                    <HeaderText>UTHD MC</HeaderText>
                    <HeaderProfile id="profileImg" src=""></HeaderProfile>
                </HeaderContentWrapper>
            </Header>
            {children}
        </PageWrapper>
    );
}

async function updateUserData() {
    try{ //Retrieve data from REST API endpoint, on success, update the profile Pic and UserData object, on failure, log the error.
        const response = await axios.get('/api/users'); //waits for axios to complete GET request to /api/users, returns an object "user"
        userData = response.data.user;
        document.getElementById("profileImg").src = `${userData.profileImg}`;
    }
    catch(err) {
        console.log(err);
        document.getElementById("profileImg").classList.add("hidden");
    }
}

const Header = styled.div`
    height: 80px;
    width: 100%;
    background-color: #000000;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PageWrapper = styled.div`

`;

const HeaderText = styled.h1`

`;

const HeaderProfile = styled.img`
    width: 50px;
    background-color: gray;
    border-radius: 100%;
    border: 2px solid #F0524C;
    cursor: pointer;
`;

const HeaderContentWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



export default Layout;