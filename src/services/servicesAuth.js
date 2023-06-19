import {
  getData,
  getDataAuth,
  postData,
  postDataAuth,
} from "../genericAxios/genericAxios";
import { getLocalStorage } from "../utils/localStorageUtils";

export async function authCheck() {
  const response = await getData("/check");

  return { status: response?.status, data: response?.data };
}

export async function signin(credentials) {
  const response = await postData("/signin", credentials);

  return response;
}

export async function signUp(obj) {
  const response = await postData("/signup", obj);

  return { status: response?.status, data: response?.data };
}

export async function signOut(refreshToken, TOKEN) {
  const response = await postDataAuth(
    "/sign_out",
    { refreshToken: refreshToken },
    TOKEN
  );
  if (response.status < 300) {
    return { status: response.status, data: response.data };
  }
  return { status: response.status, message: response.data.message };
}

export async function refreshToken() {
  const refreshTokenStorage = getLocalStorage("refreshToken");
  console.log("refreshTokenStorage", refreshTokenStorage);
  const response = await postData("/refresh_token", {
    refreshToken: refreshTokenStorage,
  });

  return { status: response?.status, data: response?.data };
}

export async function getUser(TOKEN) {
  const response = await getData("/user", TOKEN);

  return { status: response?.status, data: response?.data };
}

// GET user data with Authentication
export async function getUserAuth(TOKEN) {
  // const tokenStorage = getLocalStorage("token");
  const response = await getDataAuth("/user", TOKEN);

  return { status: response?.status, data: response?.data };
}
