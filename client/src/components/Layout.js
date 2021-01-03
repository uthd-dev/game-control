import styled from 'styled-components';

function Layout ({children}) {
    return(
        <PageWrapper>
            <Header>
                <HeaderContentWrapper>
                    <HeaderText>UTHD MC</HeaderText>
                    <HeaderProfile></HeaderProfile>
                </HeaderContentWrapper>
            </Header>
            {children}
        </PageWrapper>
    );
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

const HeaderProfile = styled.div`
    width: 50px;
    background-color: gray;
    border-radius: 100%;
`;

const HeaderContentWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export default Layout;