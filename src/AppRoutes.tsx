import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import MobileNav from "./components/MobileNav";
import App from "./App";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<MobileNav />} />

      <Route
        path="/"
        element={
          <Layout>
            <App />
          </Layout>
        }
      />

      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
