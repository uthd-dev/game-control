import styled from 'styled-components';

function ddMenu () {
    return(
        <Menu>
            <a href="/logout">Log Out</a>
        </Menu>
    );
}

const Menu = styled.div`
    position: absolute;
    color: red;
    z-index: 150;
    top: 50px;
    right: 50px;
`;

export default ddMenu;