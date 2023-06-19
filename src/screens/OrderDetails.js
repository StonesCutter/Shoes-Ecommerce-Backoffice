import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailOrderAuth } from "../services/servicesOrders";

import ViewDetails from "../components/functionalComponents/viewDetails/ViewDetails";

function OrderDetails() {
  const [state, setState] = useState({
    order: null,
  });

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getDetailOrderAuth(id);
      console.log("RESPONSE:", response.data);
      setState({ ...state, order: response.data });
    }
    getResources();
  }, []);

  return (
    <>
      <div className="screen-bg w-100 flex flex-column flex-center">
        <h1 className="screen-title">Order details</h1>
        {state.order && <ViewDetails details={state.order} />}
      </div>
    </>
  );
}

export default OrderDetails;
