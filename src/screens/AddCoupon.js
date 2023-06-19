import React from "react";
import { useTranslation } from "react-i18next";
import Form from "../components/hookComponents/form/Form";
import { addCouponFormProps } from "../utils/formUtils";
import MediaCard from "../components/functionalComponents/cardImg/CardImg";
import { addCouponAuth } from "../services/servicesCoupons";
import { notifyAddSuccess, notifyAddError } from "../utils/notificationsUtils";
import { useNavigate } from "react-router-dom";

function AddCoupon(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const addCoupon = async (data) => {
    console.log("FORM DATA:", data);
    const response = await addCouponAuth(data);
    console.log("RESPONSE:", response);
    if (response.status === 200) {
      notifyAddSuccess("Coupon");
      navigate(`/coupons`);
    } else {
      notifyAddError("coupon");
    }
  };

  return (
    <>
      <h1 className="screen-title">{t("addCoupon")}</h1>
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
            gap: 50,
            width: "50%",
          }}
        >
          <MediaCard
            imageSrc="https://shop.saravecchi.it/wp-content/uploads/2020/06/Coupon_NoText.jpg"
            height={{ height: 300 }}
            title="Coupon"
            width={{ width: 300 }}
            style={{
              boxShadow: "10px 10px 50px #0371bc",
              borderRadius: "25px",
            }}
          />
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
            propsData={addCouponFormProps}
            abilitatePictures={false}
            buttonTitle={t("add")}
            onSubmit={addCoupon}
          />
        </div>
      </div>
    </>
  );
}

export default AddCoupon;
