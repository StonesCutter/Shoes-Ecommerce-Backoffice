import { Outlet, Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorageUtils";
import { notifyAccessDenied } from "../utils/notificationsUtils";

const MarketingRoutes = () => {
  const authority = getLocalStorage("authorities");
  return authority.includes("ADMIN") || authority.includes("MARKETING") ? (
    <Outlet />
  ) : (
    (notifyAccessDenied(), (<Navigate to="/personal-area" />))
  );
};

export default MarketingRoutes;
