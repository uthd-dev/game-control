import styled from "styled-components";
import Link from "next/link";

import HeaderMenu from './menu';

function Header() {
  return (
    <HeaderWrapper>
      <title>Game Control | UTHD MC</title>
      <HeaderContentWrapper>
        <Link href="/">
          <a>
            <HeaderText>UTHD MC</HeaderText>
          </a>
        </Link>
        <HeaderMenu />
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
}

/* STYLES */

const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  background-color: #000000;

  position: -webkit-sticky;
  position: sticky;
  top: 0;

  z-index: 12;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeaderText = styled.h1`
  @media only screen and (max-width: 1400px) {
    font-size: 36px;
    font-weight: 800;
  }
`;

const HeaderContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
