import React, { useState } from "react";
import Form from "../components/hookComponents/form/Form";
import { modifyOrderFormProps } from "../utils/formUtils";
import { useTranslation } from "react-i18next";
import { getDetailOrderAuth } from "../services/servicesOrders";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { editOrderByIdAuth } from "../services/servicesOrders";
import "../styles/modifyOrder/modifyOrder.css";

function ModifyOrder() {
  const { t } = useTranslation();
  const addTitle = t("modify");

  const { id } = useParams();

  const [state, setState] = useState({
    order: null,
    formProps: [],
  });

  useEffect(() => {
    async function getResources() {
      const response = await getDetailOrderAuth(id);
      if (!response) return;
      console.log(response.data);
      setState({
        ...state,
        order: response.data?.status,
      });
      modOrderFormProps(modifyOrderFormProps);
    }
    getResources();
  }, [state.order]);

  function modOrderFormProps(formFields) {
    if (!state.order) return;
    let newformProps = [];

    for (let i = 0; i < formFields.length; i++) {
      if (formFields[i].label === "status") {
        newformProps.push({
          ...formFields[i],
          defaultValue: state.order,
        });
      }
    }

    setState({ ...state, formProps: newformProps });
  }

  const editOrder = (data) => {
    console.log(data);
    const status = data.status;
    const orderSent = { id: id, status };
    console.log(orderSent);
    editOrderByIdAuth(orderSent);
  };

  return (
    <>
      <h1 className="screen-title">{t("modifyOrder")}</h1>
      <div className="personalArea-form">
        {state.formProps.length > 0 && (
          <>
            <Form
              propsData={state.formProps}
              buttonTitle={addTitle}
              onSubmit={editOrder}
            />
          </>
        )}
      </div>
    </>
  );
}

export default ModifyOrder;
