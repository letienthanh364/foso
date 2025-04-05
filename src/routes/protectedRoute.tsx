import { Navigate, Outlet, RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import mainPath from "src/constants/path";

export function ProtectedRouteWrapper() {
  // eslint-disable-next-line no-constant-condition
  return true ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate
      to={mainPath.login}
      state={{ context: "AccessProtectedRouteDenied", from: "user" }}
    />
  );
}

const ProtectedRoute: RouteObject = {
  path: "",
  element: <ProtectedRouteWrapper />,
  children: [],
};

export default ProtectedRoute;
