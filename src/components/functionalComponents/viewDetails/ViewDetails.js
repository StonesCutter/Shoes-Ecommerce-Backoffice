import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./viewDetails.css";

function ViewDetails(props) {
  const { t } = useTranslation();

  function mapAddresses(addresses) {
    return addresses.map((detail, index) => {
      return (
        <Fragment key={index}>
          <p className="details-paragraph">
            <span className="key-text">
              {t("address")} {detail.id}:
            </span>
            <br />
            {detail.name_surname}
            <br /> {detail.street_address}
            <br />
            {t("phoneNumber")}: {detail.telephone}
            <br /> CAP: &nbsp;{detail.zipcode} <br />
            {detail.country}
          </p>
          <br />
        </Fragment>
      );
    });
  }

  const arr = props.details;
  const str = Object.entries(arr).map(([key, value]) => {
    // if (Array.isArray(value)) return null;
    if (key === "addresses") {
      return mapAddresses(value);
    } else if (Array.isArray(value)) {
      return null;
    } else if (typeof value === "object") {
      return null;
    }

    return (
      <div className="viewDetails" key={key}>
        <p className="details-paragraph">
          <span className="key-text">{t(key)}:</span>{" "}
          <span className="value-text">{value}</span>
        </p>
        <br />
      </div>
    );
  });
  return <div className="viewDetailsWrap">{str}</div>;
}
export default ViewDetails;
