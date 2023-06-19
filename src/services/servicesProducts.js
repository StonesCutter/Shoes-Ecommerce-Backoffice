import { PRODUCTS_PROPERTIES, PROPERTIES } from "../utils/properties";

import {
  getData,
  getDataAuth,
  postDataAuth,
  putDataAuth,
  deleteDataAuth,
} from "../genericAxios/genericAxios";

async function getProducts() {
  return await getData(PRODUCTS_PROPERTIES.BASE_URL + "/products");
}

async function getProductsAuth(page, perPage, lang) {
  return await getDataAuth(
    PRODUCTS_PROPERTIES.BASE_URL +
      `/products/page=${page}/perPage=${perPage}/${lang}`
  );
}

async function getProductById(id, lang) {
  return await getData(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/${id}/${lang}`
  );
}

async function getDetailProduct(id) {
  return await getData(PROPERTIES.BASE_URL + `/products/${id}`);
}

async function addProductAuth(obj) {
  return await postDataAuth(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/add`,
    obj
  );
}

async function editProductByIdAuth(id, obj) {
  return await putDataAuth(
    PRODUCTS_PROPERTIES.BASE_URL + `/products/update/${id}`,
    obj
  );
}

async function deleteProductAuthById(id) {
  return await deleteDataAuth(PROPERTIES.BASE_URL + `/products/delete/${id}`);
}

export {
  getProducts,
  getProductById,
  getDetailProduct,
  getProductsAuth,
  addProductAuth,
  editProductByIdAuth,
  deleteProductAuthById,
};
