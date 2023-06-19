import { ORDERS_PROPERTIES, PROPERTIES } from "../utils/properties";

import {
  getData,
  getDataAuth,
  postDataAuth,
  putDataAuth,
  deleteDataAuth,
} from "../genericAxios/genericAxios";

async function getOrders() {
  return await getData(ORDERS_PROPERTIES.BASE_URL + "all", PROPERTIES.API_KEY);
}

async function getOrdersAuth() {
  return await getDataAuth(ORDERS_PROPERTIES.BASE_URL + "all");
}

/*async function getOrderById(id, lang) {
  return await getData(
    ORDERS_PROPERTIES.BASE_URL + `/details/${id}/${lang}`
  );
}*/

async function addOrderAuth(obj) {
  return await postDataAuth(PROPERTIES.BASE_URL + "/orders/add_order", obj);
}

async function getDetailOrderAuth(id) {
  return await getDataAuth(PROPERTIES.BASE_URL + `/orders/details/${id}`);
}

async function editOrderByIdAuth(obj) {
  return await putDataAuth(PROPERTIES.BASE_URL + `/orders/modify_order`, obj);
}

async function deleteOrderByIdAuth(id) {
  return await deleteDataAuth(
    PROPERTIES.BASE_URL + `/orders/delete_order/${id}`
  );
}

export {
  getOrders,
  /*getOrderById,*/ getDetailOrderAuth,
  getOrdersAuth,
  addOrderAuth,
  editOrderByIdAuth,
  deleteOrderByIdAuth,
};
