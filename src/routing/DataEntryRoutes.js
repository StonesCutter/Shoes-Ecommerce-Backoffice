import { Outlet, Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorageUtils";
import { notifyAccessDenied } from "../utils/notificationsUtils";

const DataEntryRoutes = () => {
  const authority = getLocalStorage("authorities");
  return authority.includes("ADMIN") || authority.includes("DATA_ENTRY") ? (
    <Outlet />
  ) : (
    (notifyAccessDenied(), (<Navigate to="/personal-area" />))
  );
};

export default DataEntryRoutes;
