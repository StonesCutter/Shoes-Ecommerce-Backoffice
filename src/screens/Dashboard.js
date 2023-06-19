import React, { useEffect, useState } from "react";
import "../styles/dashboard/dashboard.css";
import LineChart from "../components/functionalComponents/lineChart/LineChart";
import DonutChart from "../components/functionalComponents/donutChart/DonutChart";
import { getOrdersAuth } from "../services/servicesOrders";
import {
  yearlySellsStats,
  top5mostRecentOrders,
  countrySellsStats,
  yearlyIncomeStats,
} from "../utils/dashboardUtils";
import { useTranslation } from "react-i18next";
import { notifyNotAuthorized } from "../utils/notificationsUtils";

export default function Dashboard(props) {
  const [state, setState] = useState({
    ordersList: null,
    mostRecentOrders: [],
  });

  const { t } = useTranslation();

  useEffect(() => {
    async function getResources() {
      const response = await getOrdersAuth();
      if (!response.data.orders) return;
      if (response.status === 403) {
        // navigate("/personal-area");
        notifyNotAuthorized();
      }
      console.log("RESPONSE:", response);
      console.log(
        "yearly sells stats",
        yearlySellsStats(response.data?.orders)
      );
      setState({
        ordersList: response.data?.orders,
        mostRecentOrders: top5mostRecentOrders(response.data?.orders),
      });
    }
    getResources();
  }, []);

  function mapRecentOrders(orders) {
    return orders.map((order) => {
      console.log(order.id);
      // return <p key={order.id}>{order.id}</p>;
      return (
        <table key={order.id} className="recent-orders-table">
          <thead>
            <tr>
              <th>{t("id")}</th>
              <th>{t("status")}</th>
              <th>{t("total")}</th>
              {/* <th>{t("Payment")}</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="recent-order-row">
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>{order.total_price}</td>
              {/* <td>{order.payment_status}</td> */}
            </tr>
          </tbody>
        </table>
      );
    });
  }

  return (
    <>
      <div className="flex justify-around ">
        {state.ordersList && (
          <div>
            <div className="flex align-center flex-column bg-charts m-pie-chart">
              <h2 className="mtmb-20">{t("countrySells")}</h2>
              <DonutChart data={countrySellsStats(state.ordersList)} />
            </div>

            <div className="flex">
              <div className="flex align-center flex-column bg-charts m-bar-chart">
                <h2 className="mtmb-20">{t("yearlyIncome")}</h2>
                <LineChart
                  data={yearlyIncomeStats(state.ordersList)}
                  dataName={t("monthlyIncome")}
                />
              </div>
              <div className="flex align-center flex-column bg-charts m-bar-chart">
                <h2 className="mtmb-20">{t("yearlySales")}</h2>
                <LineChart
                  data={yearlySellsStats(state.ordersList)}
                  dataName={t("numberOrders")}
                />
              </div>
            </div>
          </div>
        )}

        <div
          className="text-center flex flex-column flex-center"
          style={{ gap: 20 }}
        >
          <h2>{t("recentOrders")}</h2>
          {state.mostRecentOrders && (
            <div>{mapRecentOrders(state.mostRecentOrders)}</div>
          )}
        </div>
      </div>
    </>
  );
}
