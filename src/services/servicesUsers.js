import { PROPERTIES } from "../utils/properties";

import {
  getData,
  getDataAuth,
  postDataAuth,
  putDataAuth,
  deleteDataAuth,
} from "../genericAxios/genericAxios";

async function getUsers(page, size) {
  return await getData(
    PROPERTIES.BASE_URL + `/search/page=${page}/size=${size}`,
    PROPERTIES.API_KEY
  );
}

async function getUsersAuth(page, size) {
  return await getDataAuth(
    PROPERTIES.BASE_URL + `/search/page=${page}/size=${size}`
  );
}

async function addUserAuth(obj) {
  return await postDataAuth(PROPERTIES.BASE_URL + `/admin/user`, obj);
}

async function deleteUserAuthById(id) {
  return await deleteDataAuth(PROPERTIES.BASE_URL + `/admin/user/${id}`);
}

async function getUserById(id) {
  return await getData(
    PROPERTIES.BASE_URL + `/search/page=0/size=1?id=${id}`,
    PROPERTIES.API_KEY
  );
}

async function getUserByIdAuth(id) {
  return await getDataAuth(
    PROPERTIES.BASE_URL + `/search/page=1/size=1?id=${id}`
  );
}

async function getEmployees(page, size) {
  return await getData(
    PROPERTIES.BASE_URL + `/search/page=${page}/size=${size}?staff=true`,
    PROPERTIES.API_KEY
  );
}

async function getEmployeesAuth(page, size) {
  return await getDataAuth(
    PROPERTIES.BASE_URL + `/search/page=${page}/size=${size}?staff=true`
  );
}

async function editUserByIdAuth(id, obj) {
  return await putDataAuth(PROPERTIES.BASE_URL + `/admin/user/${id}`, obj);
}

async function editUserAuth(obj) {
  return await putDataAuth(PROPERTIES.BASE_URL + `/user`, obj);
}

export {
  getUsers,
  getUserById,
  getUserByIdAuth,
  getEmployees,
  getUsersAuth,
  getEmployeesAuth,
  addUserAuth,
  deleteUserAuthById,
  editUserByIdAuth,
  editUserAuth,
};
