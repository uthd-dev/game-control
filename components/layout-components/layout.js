import styled from "styled-components";
import Header from "./header/header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}

const PageWrapper = styled.div`
  height: auto;
  min-height: calc(100vh - 80px);
  overflow: hidden;
  background-color: #101824;
  background-size: auto;
`;

export default Layout;
