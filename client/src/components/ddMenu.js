import styled from 'styled-components';

function ddMenu () {
    return(
        <Menu>
            test
        </Menu>
    );
}

const Menu = styled.div`
    position: relative;
    min-height: 200px;
    min-width: 100px;
    color: red;
    z-index: 15;
`;

export default ddMenu;