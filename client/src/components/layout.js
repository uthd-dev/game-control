import styled from 'styled-components';
import Header from './header';

function Layout ({children}) {
    return(
        <>
            <Header />
            <PageWrapper>
                {children}
            </PageWrapper>
        </>
    );
}

const PageWrapper = styled.div`
    height: auto;
    overflow: hidden;
    background-color: #101824;
    background-size: auto;
`;



export default Layout;