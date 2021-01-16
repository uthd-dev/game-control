import styled from 'styled-components';

function streamerSidebar ({ children }) {
    return (
        <StreamerSidebar>
            {children}
        </StreamerSidebar>
    );
}

const StreamerSidebar = styled.div`
    height: 100vh;
    width: 72px;
    z-index: 5;
    background-color: #1F2A39;
    position: fixed;
    display: flex;
`;

export default streamerSidebar;