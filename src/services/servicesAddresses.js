import { PROPERTIES } from "../utils/properties";

import {
  getDataAuth,
  postDataAuth,
  putDataAuth,
  deleteDataAuth,
} from "../genericAxios/genericAxios";

async function getUserAddresses() {
  return await getDataAuth(PROPERTIES.BASE_URL + `/user/addresses`);
}

async function addAddress(obj) {
  return await postDataAuth(PROPERTIES.BASE_URL + `/user/address`, obj);
}

async function getAddressById(id) {
  return await getDataAuth(PROPERTIES.BASE_URL + `/user/address/${id}`);
}

async function editAddress(id, obj) {
  return await putDataAuth(PROPERTIES.BASE_URL + `/user/address/${id}`, obj);
}

async function deleteAddress(id) {
  return await deleteDataAuth(PROPERTIES.BASE_URL + `/user/address/${id}`);
}

export {
  getUserAddresses,
  addAddress,
  deleteAddress,
  editAddress,
  getAddressById,
};
