import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getUserByIdAuth } from "../services/servicesUsers";
import ViewDetails from "../components/functionalComponents/viewDetails/ViewDetails";

function UserDetails(props) {
  const { t } = useTranslation();
  const [state, setState] = useState({
    user: null,
  });

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getUserByIdAuth(id);
      if (!response) return;
      console.log("RESPONSE:", response.data?.usersDTO[0]);
      setState({ ...state, user: response.data?.usersDTO[0] });
    }
    getResources();
  }, []);

  return (
    <>
      <div className=" flex flex-column flex-center">
        <h1 className="screen-title">{t("userDetails")}</h1>
        <div className="w-50">
          {state.user && <ViewDetails details={state.user} />}
        </div>
      </div>
    </>
  );
}

export default UserDetails;
