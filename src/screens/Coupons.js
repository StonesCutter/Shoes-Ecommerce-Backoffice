import React, { useEffect, useState } from "react";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import {
  getCouponsAuth,
  deleteCouponByIdAuth,
} from "../services/servicesCoupons";
import { couponsColumns, couponsListIcons } from "../utils/tableUtils";
import {
  notifyDeleteSuccess,
  notifyDeleteError,
} from "../utils/notificationsUtils";

function Coupons(props) {
  const { t } = useTranslation();

  const [state, setState] = useState({
    couponsList: null,
  });

  useEffect(() => {
    async function getData() {
      const response = await getCouponsAuth(1, 10);
      if (!response.data) return;
      console.log("RESPONSE COUPONS:", response.data);
      setState({ couponsList: response.data });
    }
    getData();
  }, []);

  async function getResources(page, perPage) {
    const response = await getCouponsAuth(page, perPage);
    if (!response.data) return;
    console.log("RESPONSE COUPONS:", response.data);
    setState({ couponsList: response.data });
  }

  async function deleteCoupon(id) {
    alert(`Are you sure you want to delete coupon with id ${id}?`);
    const response = await deleteCouponByIdAuth(id);
    console.log("RESPONSE DELETE:", response);
    if (response.status === 200) {
      notifyDeleteSuccess("Coupon");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      notifyDeleteError("coupon");
    }
  }

  return (
    <>
      <h1 className="screen-title">{t("couponsManagement")}</h1>
      <div style={{ width: "95%", margin: "0 auto" }}>
        <FiltersRow
          label={t("couponsList")}
          addLabel={t("addCoupon")}
          addUrl={"/coupons/add-coupon"}
        />
        <GenericTable
          fields={state.couponsList?.coupons}
          columns={couponsColumns}
          icons={couponsListIcons}
          results={state.couponsList?.total_element}
          getResources={getResources}
          deleteAction={deleteCoupon}
        />
      </div>
    </>
  );
}

export default Coupons;
