import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCouponByIdAuth } from "../services/servicesCoupons";
import ViewDetails from "../components/functionalComponents/viewDetails/ViewDetails";
function CouponDetails() {
  const [state, setState] = useState({
    coupon: null,
  });

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getCouponByIdAuth(id);
      if (!response) return;
      console.log("RESPONSE:", response.data);
      setState({ ...state, coupon: response.data[0] });
    }
    getResources();
  }, []);

  return (
    <>
      <div className="screen-bg w-100 flex flex-column flex-center">
        <h1 className="screen-title">Coupon details</h1>
        <div className="w-50">
          {state.coupon && <ViewDetails details={state.coupon} />}
        </div>
      </div>
    </>
  );
}

export default CouponDetails;
