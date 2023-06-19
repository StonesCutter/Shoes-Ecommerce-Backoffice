import React from "react";
import { useState, useEffect } from "react";
import { getUserByIdAuth, editUserByIdAuth } from "../services/servicesUsers";
import { modifyUserFormProps, modifyFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import Form from "../components/hookComponents/form/Form";
import { useTranslation } from "react-i18next";
import {
  notifyEditSuccess,
  notifyEditError,
} from "../utils/notificationsUtils";
import { useNavigate } from "react-router-dom";

function ModifyUser() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    user: null,
    formProps: [],
  });

  const optionValues = [
    { value: "", label: "Customer" },
    { value: "ADMIN", label: "Admin" },
    { value: "DATA_ENTRY", label: "Data Entry" },
    { value: "MARKETING", label: "Marketing" },
  ];

  useEffect(() => {
    async function getResources() {
      const response = await getUserByIdAuth(id);
      if (!response) return;
      console.log("RESPONSE:", response.data?.usersDTO[0]);
      setState({
        ...state,
        user: response.data?.usersDTO[0],
        formProps: modifyFormProps(
          modifyUserFormProps,
          response.data?.usersDTO[0]
        ),
      });
    }
    getResources();
  }, []);

  const editUser = async (data) => {
    console.log("DATA", data);
    delete data.id;
    console.log("DATA2", data);
    Object.keys(data).forEach((item) => {
      if (item === "authorities") {
        return (data[item] = ["USER", data[item]]);
      }
    });
    const response = await editUserByIdAuth(id, data);
    console.log("RESPONSE:", response);
    if (response.status === 200) {
      notifyEditSuccess("User");
      navigate("/users");
    } else {
      notifyEditError("user");
    }
  };

  return (
    <>
      <h1 className="screen-title">Modify user</h1>
      <p className="text-center">
        <span className="bold">Previous roles: </span>
        {state.user?.authories.toString().toLowerCase().split(",").join(", ")}
      </p>
      <div className="flex w-100 align-center justify-center">
        {state.formProps.length > 0 && (
          <>
            <Form
              propsData={state.formProps}
              abilitatePictures={false}
              buttonTitle={t("modify")}
              optionValues={optionValues}
              onSubmit={editUser}
            />
          </>
        )}
      </div>
    </>
  );
}

export default ModifyUser;
