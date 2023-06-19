import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { modifyCouponFormProps, modifyFormProps } from "../utils/formUtils";
import { useParams } from "react-router-dom";
import { getCouponByIdAuth, editCouponAuth } from "../services/servicesCoupons";

function ModifyCoupon(props) {
  const { t } = useTranslation();

  const [state, setState] = useState({
    coupon: null,
    formProps: [],
  });

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getCouponByIdAuth(id);
      if (!response) return;
      console.log("RESPONSE:", response.data);
      setState({
        ...state,
        coupon: response.data[0],
        formProps: modifyFormProps(modifyCouponFormProps, response.data[0]),
      });
    }
    getResources();
  }, []);

  async function editCoupon(data) {
    console.log("FORM DATA", data);
    const response = await editCouponAuth(data);
    console.log("RESPONSE:", response);
    if (response.status === 200) {
      alert("Coupon modified successfully");
      window.location.href = "/coupons";
    } else {
      alert("Error modifying coupon");
    }
  }

  return (
    <>
      <h1 className="screen-title">{t("modifyCoupon")}</h1>
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
          {state.formProps.length > 0 && (
            <Form
              propsData={state.formProps}
              abilitatePictures={false}
              buttonTitle={t("modify")}
              onSubmit={editCoupon}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ModifyCoupon;
