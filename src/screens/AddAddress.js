import React from "react";
import { addAddress } from "../services/servicesAddresses";
import { useTranslation } from "react-i18next";
import { addAddressFormProps } from "../utils/formUtils";
import Form from "../components/hookComponents/form/Form";
import { notifyAddSuccess, notifyAddError } from "../utils/notificationsUtils";
import { useNavigate } from "react-router-dom";

function AddAddress() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  async function addNewAddress(data) {
    console.log("FORM DATA:", data);
    const response = await addAddress(data);
    console.log("RESPONSE:", response);
    if (response.status === 200) {
      notifyAddSuccess("Address");
      navigate(`/personal-area/addresses`);
    } else {
      notifyAddError("address");
    }
  }

  return (
    <>
      <h1 className="screen-title">{t("addAddress")}</h1>
      <div className="flex flex-center">
        <Form
          propsData={addAddressFormProps}
          buttonTitle={t("add")}
          onSubmit={addNewAddress}
        />
      </div>
    </>
  );
}

export default AddAddress;
