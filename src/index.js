import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./routing/routing";
import { BrowserRouter } from "react-router-dom";
import "./styles/common.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import i18n from "./assets/translations/i18n";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routing />
      <ToastContainer hideProgressBar />
    </BrowserRouter>
  </Provider>
);
