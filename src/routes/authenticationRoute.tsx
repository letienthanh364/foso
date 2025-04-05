import { Navigate, Outlet, RouteObject } from "react-router-dom";
import mainPath from "../constants/path";
import MainLayout from "../layouts/MainLayout";

function AuthenticationRouteWrapper() {
  // eslint-disable-next-line no-constant-condition
  return true ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to={mainPath.home} />
  );
}

const AuthenticationRoute: RouteObject = {
  path: "",
  element: <AuthenticationRouteWrapper />,
  children: [],
};

export default AuthenticationRoute;
