import { Outlet, Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorageUtils";
import { notifyAccessDenied } from "../utils/notificationsUtils";

const PrivateRoutes = () => {
  // const { isLogged } = useSelector((state) => state.userDuck);
  const isLogged = getLocalStorage("isLogged");
  console.log("PRIVATEROUTES isLogged:", isLogged);

  return isLogged ? (
    <Outlet />
  ) : (
    (notifyAccessDenied(), (<Navigate to="/login" />))
  );
};

export default PrivateRoutes;
