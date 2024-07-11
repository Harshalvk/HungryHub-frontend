import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import MobileNav from "./components/MobileNav";
import App from "./App";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import { ManageRestaurantPage } from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/test" element={<MobileNav />} />

      <Route
        path="/"
        element={
          <Layout style={false}>
            <App />
          </Layout>
        }
      />

      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route
        path="/search/:city"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      />

      <Route
        path="/detail/:restaurantId"
        element={
          <Layout>
            <DetailPage/>
          </Layout>
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
