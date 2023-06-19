import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../services/servicesProducts";
import { useTranslation } from "react-i18next";
import ProductImages from "../components/functionalComponents/productImages/ProductImages";
import { t } from "i18next";
import "../styles/productDetails/productDetails.css";

function ProductDetails() {
  const { i18n } = useTranslation();
  const [state, setState] = useState({
    product: null,
  });
  const language = i18n.language;

  const { id } = useParams();

  useEffect(() => {
    async function getResources() {
      const response = await getDetailProduct(id);
      if (!response) return;
      console.log("RESPONSE:", response.data);
      setState({ ...state, product: response.data });
    }
    getResources();
  }, []);

  return (
    <>
      <div className="screen-bg w-100 flex flex-column flex-center">
        <h1 className="screen-title">Product details</h1>
        <div className="flex flex-column w-95 align-center justify-center ">
          {state.product && (
            <ProductImages productImages={state.product.productImages} />
          )}

          {state.product && (
            <div className="product-details-container">
              <h1 className="text-center">
                {state.product.product.brand} {state.product.product.name}
              </h1>
              <div className="product-info-wrapper">
                <div className="w-50 product-description-container">
                  <h3>{t("description")}</h3>
                  <p>
                    {language === "en"
                      ? state.product.product.descriptionEng
                      : state.product.product.descriptionIt}
                  </p>
                  <p>
                    <span className="bold">{t("startingPrice")}:&nbsp;</span>
                    {state.product.product.startingPrice} €
                  </p>
                  <p>
                    <span className="bold">{t("listedPrice")}:&nbsp;</span>
                    {state.product.product.listedPrice} €
                  </p>
                  <p>
                    <span className="bold">{t("color")}:&nbsp;</span>
                    {state.product.product.color}
                  </p>
                  <p>
                    <span className="bold">{t("id")}:&nbsp;</span>
                    {state.product.product.id}
                  </p>
                  <div className="w-95 product-sizes-container"></div>
                </div>
                <div className="product-description-container flex-center w-50">
                  <h3>{t("sizes")}</h3>
                  {state.product.productDetails && (
                    <div className="flex flex-row flex-wrap">
                      <table className="sizes-table">
                        <thead>
                          <tr>
                            <th>{t("size")}</th>
                            <th>{t("quantity")}</th>
                            <th>{t("sellingPrice")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {state.product.productDetails.map((detail, index) => (
                            <tr key={index}>
                              <td>{detail.size}</td>
                              <td>{detail.quantity}</td>
                              <td>{detail.sellingPrice}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
