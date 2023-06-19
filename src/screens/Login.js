import React from "react";
import Form from "../components/hookComponents/form/Form";
import { loginFormProps } from "../utils/formUtils";
import { useTranslation } from "react-i18next";
import { setLocalStorage } from "../utils/localStorageUtils";
import { signin, getUser } from "../services/servicesAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserCredentials } from "../redux/duck/user/userDuck";
import { setToken } from "../redux/duck/token/tokenDuck";
import {
  notifyLoginSuccess,
  notifyLoginError,
} from "../utils/notificationsUtils";
import "../styles/login/login.css";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data);

    const response = await signin({
      email: data.email,
      password: data.password,
    });
    console.log("Response signin", response);

    if (response.status === 200) {
      const user = await getUser(response.data.token);
      console.log("user", user);
      notifyLoginSuccess();

      dispatch(
        setUserCredentials({
          name: user.data?.first_name,
          surname: user.data?.last_name,
          email: user.data?.email,
          birthDate: user.data?.birth_date,
        })
      );

      dispatch(
        setToken({
          token: response.data.token,
          refreshToken: response.data.refreshToken,
        })
      );

      setLocalStorage("token", response.data.token);
      setLocalStorage("refreshToken", response.data.refreshToken);
      setLocalStorage("isLogged", true);
      setLocalStorage("authorities", response.data.permission);

      navigate(`/personal-area`);
    } else {
      notifyLoginError(response.error.response.data.message);
      // alert(response.error.response.data.message);
    }
  };

  return (
    <div className="login-page-container">
      <div className="form-login-page-container">
        <h1>CMS Beije Shoes</h1>
        <Form
          propsData={loginFormProps}
          buttonTitle={t("login")}
          onSubmit={onSubmit}
          buttonColor="primary"
        />
      </div>
    </div>
  );
}

export default Login;
