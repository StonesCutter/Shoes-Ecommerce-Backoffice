import React from "react";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import { usersListIcons, usersColumns } from "../utils/tableUtils";
import { Tabs, Tab } from "@mui/material";
import {
  notifyDeleteSuccess,
  notifyDeleteError,
} from "../utils/notificationsUtils";
import { useState, useEffect } from "react";
import {
  getUsersAuth,
  getEmployeesAuth,
  deleteUserAuthById,
} from "../services/servicesUsers";

export default function Users() {
  const { t } = useTranslation();

  const [state, setState] = useState({
    users: null,
    employees: null,
    authority: "users",
  });

  useEffect(() => {
    async function getData() {
      const response = await getUsersAuth(1, 10);
      const responseEmployees = await getEmployeesAuth(1, 10);
      let results_employees = null;
      let results_users = null;
      results_users = response.data.total_element;
      results_employees = responseEmployees.data.total_element;

      console.log("RESULTS USERS:", results_users);
      console.log("RESULTS EMPLOYEES:", results_employees);

      console.log("RESPONSE USERS:", response.data);
      console.log("RESPONSE EMPLOYEES:", responseEmployees.data);
      setState({
        ...state,
        users: response.data,
        employees: responseEmployees.data,
      });
    }
    getData();
  }, []);

  function changeUser(e) {
    setState({
      ...state,
      authority: e.target.textContent.toLowerCase(),
    });
  }

  async function getResources(page, perPage) {
    const response = await getUsersAuth(page, perPage);
    const responseEmployees = await getEmployeesAuth(page, perPage);
    let results_employees = null;
    let results_users = null;
    results_users = response.data.total_element;
    results_employees = responseEmployees.data.total_element;

    console.log("RESULTS USERS:", results_users);
    console.log("RESULTS EMPLOYEES:", results_employees);

    console.log("RESPONSE USERS:", response.data);
    console.log("RESPONSE EMPLOYEES:", responseEmployees.data);
    setState({
      ...state,
      users: response.data,
      employees: responseEmployees.data,
    });
  }

  async function deleteUser(id) {
    alert(`Are you sure you want to delete user with id ${id}?`);
    const response = await deleteUserAuthById(id);
    console.log("RESPONSE DELETE:", response);
    if (response.status === 200) {
      notifyDeleteSuccess("User");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      notifyDeleteError("user");
    }
  }

  return (
    <>
      <h1 className="screen-title">{t("manageUsers")}</h1>
      {state.users && (
        <div style={{ width: "95%", margin: "0 auto" }}>
          <FiltersRow
            label={t("usersList")}
            addLabel={t("addUser")}
            addUrl={"/users/add-user"}
          />
          <Tabs
            value={state.authority}
            onChange={changeUser}
            style={{
              marginBottom: "10px",
              backgroundColor: "white",
              border: "2px solid #0171bc",
              borderRadius: "7px",
            }}
          >
            <Tab label="Users" value="users" />
            <Tab label="Employees" value="employees" />
          </Tabs>
          <GenericTable
            fields={
              state.authority === "users"
                ? state.users.usersDTO
                : state.employees.usersDTO
            }
            results={
              state.authority === "users"
                ? state.users.total_element
                : state.employees.total_element
            }
            columns={usersColumns}
            icons={usersListIcons}
            getResources={getResources}
            deleteAction={deleteUser}
          />
        </div>
      )}
    </>
  );
}
