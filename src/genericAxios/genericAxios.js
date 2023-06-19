import axios from "axios";
import { PROPERTIES } from "../utils/properties";
import { getLocalStorage, setLocalStorage } from "../utils/localStorageUtils";
import { refreshToken } from "../services/servicesAuth";
import store from "../redux/store";
import { setToken } from "../redux/duck/token/tokenDuck";

const axiosInstance = axios.create({
  //istanza
  baseURL: PROPERTIES.BASE_URL,
  timeout: PROPERTIES.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    "Acces-Control-Allow-Origin": "*",
    // Authorization: `Bearer ${PROPERTIES.API_KEY}`,
  },
});

//instanza axios per chiamate con richiesta di autenticazione
const axiosInstanceToken = axios.create({
  baseURL: PROPERTIES.BASE_URL,
  timeout: PROPERTIES.TIMEOUT,
});

//intercetta le richieste con autenticazione, controlla nello storage se esiste il token e lo inserisce nell'header
axiosInstanceToken.interceptors.request.use(
  (config) => {
    const token = getLocalStorage("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//intercetta la risposta
axiosInstanceToken.interceptors.response.use(
  //se positiva invia la risposta
  function (response) {
    return response;
  },
  //se con errore
  async function (error) {
    console.log("responseError", error);
    const originalRequest = error.config;
    //se l'errore è 401 usa il refresh Token per ricevere il nuovo token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const updateToken = await refreshToken();
      console.log("generic Axios - UPDATETOKEN", updateToken);
      if (updateToken.status === 200) {
        const { token, refreshToken } = updateToken.data;

        store.dispatch(
          setToken({
            token: token,
            refreshToken: refreshToken,
          })
        );

        setLocalStorage("token", token);
        setLocalStorage("refreshToken", refreshToken);
        //riprova a fare la chiamata avendo il token aggiornato nello storage
        return axiosInstanceToken(originalRequest);
      }
    }
    //qui gestire altri errori 403, 404, 500
    return Promise.reject(error);
  }
);

export function responseApi(response) {
  //general function for get the response
  return {
    data: response?.data,
    status: response?.status,
  };
}

export function responseApiError(error) {
  //general function in case of wrong api call
  return {
    message: error?.message,
    status: error?.response?.status,
    error,
  };
}

export async function postData(resource, obj, header = null) {
  return axiosInstance
    .post(resource, obj, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
    })
    .then((response) => {
      return responseApi(response);
    })
    .catch((error) => {
      return responseApiError(error);
    });
}

// POST with Authentication
export async function postDataAuth(resource, obj) {
  // const response = await axiosInstanceToken.post(resource, obj);
  // return response;
  return axiosInstanceToken
    .post(resource, obj)
    .then((response) => {
      return responseApi(response);
    })
    .catch((error) => {
      return responseApiError(error);
    });
}

export async function getData(resource, header = null) {
  //function for get api call
  return axiosInstance
    .get(resource, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
    })
    .then((response) => {
      return responseApi(response);
    })
    .catch((error) => {
      return responseApiError(error);
    });
}

// GET with Authentication
export async function getDataAuth(resource) {
  const response = await axiosInstanceToken
    .get(resource)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      return err.response;
    });

  return response;
}

export async function putData(resource, obj, header = null) {
  //function for put api call
  return axiosInstance
    .put(resource, obj, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
    })
    .then((response) => {
      return responseApi(response);
    })
    .catch((error) => {
      return responseApiError(error);
    });
}

// PUT with Authentication
export async function putDataAuth(resource, obj, header = null) {
  const response = await axiosInstanceToken
    .put(resource, obj, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
    })
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      return err.response;
    });

  return response;
}

export async function deleteData(resource, header = null) {
  return axiosInstance
    .delete(resource, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
    })
    .then((response) => {
      return responseApi(response);
    })
    .catch((error) => {
      return responseApiError(error);
    });
}

// DELETE with Authentication
export async function deleteDataAuth(resource, header = null) {
  const response = await axiosInstanceToken.delete(resource, {
    headers: header !== null ? { Authorization: `Bearer ${header}` } : null,
  });

  return response;
}
