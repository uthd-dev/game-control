import styled from "styled-components";

import Layout from "../layout-components/layout";
import AdminSidebar from "./admin-nav-sidebar";

function AdminLayout({ children }) {
  return (
    <Layout>
      <AdminSidebar />
      <ContentWrapper>{children}</ContentWrapper>
    </Layout>
  );
}

const ContentWrapper = styled.div`
  width: 82vw;
  margin-left: 18vw;
  padding: 20px;
`;

export default AdminLayout;
