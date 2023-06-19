import React from "react";
import "./sideNav.css";
import { sidebarConfig } from "../../../utils/sidebarConfigUtils";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SideNav(props) {
  // stato per settare utente corrente
  // verrà preso da redux store in base al token iniziale
  const [state, setState] = useState({
    user: [],
  });

  const { t } = useTranslation();

  //   inizializza una sola volta al mount lo stato e il conseguente map del menu
  useEffect(() => {
    console.log("PROPS AUTHORITIES", props?.authorities);
    setState({
      ...state,
      user: props?.authorities
        ? sidebarConfig[props?.authorities[1]?.toLowerCase()]
        : "USER",
    });
  }, []);

  //   funzione per mappare le voci del menu in base all'utente loggato
  function mapMenu() {
    const arrMenu = state.user.map((link, key) => {
      return (
        <li key={key}>
          <div>{link.icon}</div>
          <NavLink to={link.link}>{t(link.label)}</NavLink>
        </li>
      );
    });
    return arrMenu;
  }

  return (
    <>
      {state.user && (
        <div className="menuListWrapper">
          <ul>{mapMenu()}</ul>
        </div>
      )}
    </>
  );
}

export default SideNav;
