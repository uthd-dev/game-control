import styled from 'styled-components';
import Layout from '../components/layout';

function Home () {
    return(
        <Layout>
            <Title>Welcome to UTHD MC!</Title>
        </Layout>
    );
}

const Title = styled.h1`
    margin: 25px 50px;
    color: #F9FAFB;
`;

export default Home;