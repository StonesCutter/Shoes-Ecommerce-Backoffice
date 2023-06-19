import React, { useEffect, useState } from "react";
import GenericTable from "../components/functionalComponents/table/GenericTable";
import FiltersRow from "../components/functionalComponents/filtersRow/FiltersRow";
import { useTranslation } from "react-i18next";
import { productsColumns } from "../utils/tableUtils";
import {
  notifyDeleteSuccess,
  notifyDeleteError,
} from "../utils/notificationsUtils";
import { productsListIcons } from "../utils/tableUtils";
import {
  getProductsAuth,
  deleteProductAuthById,
} from "../services/servicesProducts";

function Products(props) {
  const [state, setState] = useState({
    productsList: null,
    results: null,
  });
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    async function getResources() {
      const response = await getProductsAuth(1, 10, language);
      console.log("RESPONSE:", response.data);
      setState({
        ...state,
        results: response.data?.results,
        productsList: response.data?.products,
      });
    }
    getResources();
  }, []);

  async function deleteProduct(id) {
    alert(`Are you sure you want to delete product with id ${id}?`);
    const response = await deleteProductAuthById(id);
    console.log("RESPONSE DELETE:", response);
    if (response.status === 200) {
      notifyDeleteSuccess("Product");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      notifyDeleteError("product");
    }
  }

  async function getResourcesTest(page, perPage) {
    const response = await getProductsAuth(page, perPage);
    console.log("RESPONSE:", response.data?.products);
    setState({
      ...state,
      results: response.data?.results,
      productsList: response.data?.products,
    });
  }

  return (
    <>
      <h1 className="screen-title">{t("productsManagement")}</h1>
      <div style={{ width: "95%", margin: "0 auto" }}>
        <FiltersRow
          label={t("productsList")}
          addLabel={t("addProduct")}
          addUrl="/products/add-product"
        />
        {state.productsList && state.results && (
          <GenericTable
            fields={state.productsList}
            icons={productsListIcons}
            columns={productsColumns}
            getResources={getResourcesTest}
            results={state.results}
            deleteAction={deleteProduct}
          />
        )}
      </div>
    </>
  );
}

export default Products;
