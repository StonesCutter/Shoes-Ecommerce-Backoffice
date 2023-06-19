import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/functionalComponents/header/Header";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";

function Layout() {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="screen-bg w-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
