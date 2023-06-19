import React from "react";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { ordersColumns } from "../utils/tableUtils";
import {
  notifyDeleteSuccess,
  notifyDeleteError,
} from "../utils/notificationsUtils";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getOrdersAuth, deleteOrderByIdAuth } from "../services/servicesOrders";
import { ordersListIcons } from "../utils/tableUtils";

export default function Orders() {
  const [state, setState] = useState({
    ordersList: null,
  });
  const { t } = useTranslation();

  useEffect(() => {
    async function getResources() {
      const response = await getOrdersAuth();
      console.log("RESPONSE orders:", response.data);
      setState({ ordersList: response.data?.orders });
    }
    getResources();
  }, []);

  async function deleteOrder(id) {
    alert(`Are you sure you want to delete order with id ${id}?`);
    const response = await deleteOrderByIdAuth(id);
    console.log("RESPONSE DELETE:", response);
    if (response.status === 200) {
      notifyDeleteSuccess("Order");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      notifyDeleteError("order");
    }
  }

  return (
    <>
      <h1 className="screen-title">{t("manageOrders")}</h1>
      <div style={{ width: "95%", margin: "0 auto" }}>
        <FiltersRow
          label={t("ordersList")}
          addLabel={t("addOrder")}
          addUrl="/orders/add-order"
        />
        <GenericTable
          fields={state.ordersList}
          columns={ordersColumns}
          icons={ordersListIcons}
          deleteAction={deleteOrder}
        />
      </div>
    </>
  );
}
