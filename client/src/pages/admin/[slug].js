import Layout from "../../components/admin-components/admin-layout";
import Dashboard from "../../components/admin-components/pages/dashboard";

import { useRouter } from "next/router";

function AdminPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <Layout>{getContent(slug)}</Layout>;
}

function getContent(slug) {
  switch (slug) {
    case "dashboard":
      return <Dashboard />;
    default:
      return <h1>404 Page not found!</h1>;
  }
}

export default AdminPage;
