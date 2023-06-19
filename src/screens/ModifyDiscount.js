import React, { useEffect, useState } from "react";
import SideBar from "../components/functionalComponents/sideBar/Sidebar";
import Header from "../components/functionalComponents/header/Header";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { modifyDiscountFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/servicesProducts";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";

function ModifyDiscount(props) {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    product: null,
  });
  const language = i18n.language;

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getProductById(id, language);
      console.log("RESPONSE:", response.data);
      setState({ ...state, product: response.data });
    }
    getResources();
  }, [language]);

  const canUploadPictures = false;
  const addTitle = t("add");

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ width: "100%" }} className="screen-bg">
          <h1 className="screen-title">{t("modifyDiscount")}</h1>
          <div
            style={{
              width: "95%",
              height: "80%",
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
                gap: 50,
                width: "50%",
              }}
            >
              <h2>{state.product?.brand + " " + state.product?.name}</h2>
              <MediaCard
                imageSrc="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c42ec98f-d993-4b3b-a045-6dbc885ee722/scarpa-da-training-metcon-8-Msjwbs.png"
                height={{ height: 300 }}
                title="Shoe"
                width={{ width: 300 }}
                style={{
                  boxShadow: "10px 10px 50px #0371bc",
                  borderRadius: "25px",
                }}
              />
              <p>{state.product?.description}</p>
            </div>
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
                propsData={modifyDiscountFormProps}
                abilitatePictures={canUploadPictures}
                buttonTitle={addTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifyDiscount;
