import React from "react";
import { useState, useEffect } from "react";
import AddressCard from "../components/functionalComponents/addressCard/AddressCard";
import { getUserAddresses } from "../services/servicesAddresses";
import { useTranslation } from "react-i18next";
import "../styles/userAddresses/userAddresses.css";

function UserAddresses() {
  const { t } = useTranslation();
  const [state, setState] = useState({
    addresses: [],
  });

  useEffect(() => {
    async function getResources() {
      const response = await getUserAddresses();
      if (!response) return;
      console.log("RESPONSE ADDRESSES:", response.data);
      setState({ ...state, addresses: response.data });
    }
    getResources();
  }, []);

  function mapAddressCards(addresses) {
    return addresses.map((address) => {
      return <AddressCard address={address} key={address.id} />;
    });
  }

  return (
    <div>
      <h1 className="screen-title">{t("yourAddresses")}</h1>
      <div className="addresses-container flex ">
        <AddressCard isAddAddress={true} className="card-address-container" />
        {state.addresses && mapAddressCards(state.addresses)}
      </div>
    </div>
  );
}

export default UserAddresses;
