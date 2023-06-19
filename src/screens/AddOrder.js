import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addOrderFormProps } from "../utils/formUtils";
import { getProductById } from "../services/servicesProducts";
import { addOrderAuth } from "../services/servicesOrders";
import { notifyAddSuccess, notifyAddError } from "../utils/notificationsUtils";
import { useNavigate } from "react-router-dom";

function AddOrder(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [state, setState] = useState({
    product: null,
    productArr: [],
    totalProducts: [],
  });

  async function filterId(event) {
    if (
      event.target.value === null ||
      event.target.value === undefined ||
      event.target.value === ""
    )
      return;
    const response = await getProductById(event.target.value, "en");
    console.log(response);
    setState({
      ...state,
      product: response.data.productSizes[0].productDetailsId,
      productArr: [response.data],
    });
  }

  function isChecked(e) {
    let addProd = [];
    if (e.target.checked) {
      addProd.push(state.product);
    }
    setState({ ...state, totalProducts: [...state.totalProducts, ...addProd] });
    console.log(state.totalProducts);
  }

  function mapProducts(products) {
    return products?.map((product) => {
      return (
        <div key={product.id}>
          <label htmlFor={product.id}>{product.name}</label>
          {/* <br /> */}
          <input
            type="checkbox"
            id={product.id}
            name={product.name}
            onChange={isChecked}
          />
        </div>
      );
    });
  }

  const canUploadPictures = false;
  const addTitle = t("add");

  async function addOrder(data) {
    const outputObj = { ...data, products: state.totalProducts };
    console.log(outputObj);
    const response = await addOrderAuth(outputObj);
    console.log(response);
    if (response.status === 200) {
      notifyAddSuccess("Order");
      navigate("/orders");
    } else {
      notifyAddError("order");
    }
  }

  return (
    <>
      <h1 className="screen-title">{t("addOrder")}</h1>
      <div
        style={{
          width: "95%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Form
            propsData={addOrderFormProps}
            abilitatePictures={canUploadPictures}
            buttonTitle={addTitle}
            isFromAddOrder={true}
            onSubmit={addOrder}
            filterProduct={filterId}
          />

          {state.productArr.length > 0 && (
            <div>{mapProducts(state.productArr)}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddOrder;
