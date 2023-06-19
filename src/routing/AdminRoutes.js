import { Outlet, Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorageUtils";
import { notifyAccessDenied } from "../utils/notificationsUtils";

const AdminRoutes = () => {
  const authority = getLocalStorage("authorities");
  return authority.includes("ADMIN") ? (
    <Outlet />
  ) : (
    (notifyAccessDenied(), (<Navigate to="/personal-area" />))
  );
};

export default AdminRoutes;
