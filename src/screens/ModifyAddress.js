import React from "react";
import { useParams } from "react-router-dom";
import { addAddressFormProps, modifyFormProps } from "../utils/formUtils";
import Form from "../components/hookComponents/form/Form";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { editAddress, getAddressById } from "../services/servicesAddresses";

function ModifyAddress() {
  const { t } = useTranslation();
  const { id } = useParams();

  const [state, setState] = useState({
    address: null,
    formProps: [],
  });

  useEffect(() => {
    getResources();
  }, []);

  async function getResources() {
    const response = await getAddressById(id);
    if (!response) return;
    console.log("RESPONSE ADDRESS:", response.data);
    setState({
      ...state,
      address: response.data,
      formProps: modifyFormProps(addAddressFormProps, response.data),
    });
  }

  async function editUserAddress(data) {
    console.log("FORM DATA", data);
    const response = await editAddress(id, data);
    console.log("RESPONSE:", response);
    if (response.status === 200) {
      alert("Address modified successfully");
      window.location.href = "/personal-area/addresses";
    } else {
      alert("Error modifying address");
    }
  }

  return (
    <>
      <h1 className="screen-title">{t("modifyAddress")}</h1>
      <div className="flex flex-center">
        {state.formProps?.length > 0 && (
          <Form
            propsData={state.formProps}
            buttonTitle={t("modify")}
            onSubmit={editUserAddress}
          />
        )}
      </div>
    </>
  );
}

export default ModifyAddress;
