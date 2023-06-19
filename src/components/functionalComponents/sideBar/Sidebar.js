import React from "react";
import SideNav from "../sideNav/SideNav";
import "./sideBar.css";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";
import { signOut } from "../../../services/servicesAuth";
import { useDispatch, useSelector } from "react-redux";
import { clearLocalStorage } from "../../../utils/localStorageUtils";
import { removeToken } from "../../../redux/duck/token/tokenDuck";
import { initUserCredentials } from "../../../redux/duck/user/userDuck";
import { Button } from "@mui/material";
import {
  notifyLogOutSuccess,
  notifyLogOutError,
} from "../../../utils/notificationsUtils";
import { getLocalStorage } from "../../../utils/localStorageUtils";

function SideBar() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, refreshToken } = useSelector((state) => state.tokenDuck);
  // const authorities = useSelector((state) => state.userDuck.authorities);
  const authorities = getLocalStorage("authorities");

  console.log("authorities", authorities);
  // console.log("authorities[1]", authorities[1]);

  async function userLogOut() {
    const response = await signOut(refreshToken, token);
    if (response.status < 300) {
      dispatch(initUserCredentials());
      dispatch(removeToken());
      clearLocalStorage();

      notifyLogOutSuccess();
      setTimeout(() => {
        navigate(`/login`);
      }, 1500);
    } else {
      notifyLogOutError();
    }
  }

  return (
    <div className="sideNavWrapper">
      {" "}
      <nav className="sideNavMenu">
        <SideNav authorities={authorities} />
        <div className="logoutButton">
          <LogoutIcon style={{ color: "white", margin: "8px 15px" }} />
          <Button
            onClick={userLogOut}
            style={{
              color: "white",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            {t("logout")}
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
