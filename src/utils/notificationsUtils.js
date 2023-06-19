import { toast } from "react-toastify";

function notifyLogOutSuccess() {
  toast.success("You have succesful logged out", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
}

function notifyLogOutError() {
  toast.error("Something went wrong while logging out", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
}

function notifyLoginSuccess() {
  toast.success("You have succesful logged in", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
  });
}

function notifyLoginError(errorMsg) {
  toast.error(errorMsg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
}

function notifyAddSuccess(item) {
  toast.success(`${item} added succesfully`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1500,
  });
}

function notifyAddError(item) {
  toast.error(`Something went wrong while adding ${item}`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
}

function notifyEditSuccess(item) {
  toast.success(`${item} edited succesfully`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1500,
  });
}

function notifyEditError(item) {
  toast.error(`Something went wrong while editing ${item}`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
}

function notifyDeleteSuccess(item) {
  toast.success(`${item} deleted succesfully`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1500,
  });
}

function notifyDeleteError(item) {
  toast.error(`Something went wrong while deleting ${item}`, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
}

function notifyNotAuthorized() {
  toast.error("You are not authorized to perform this action", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
}

function notifyAccessDenied() {
  toast.error("Access denied", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
}

function notifyNotEnoughImages() {
  toast.error("Upload at least three images", {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
}

export {
  notifyLogOutSuccess,
  notifyLogOutError,
  notifyLoginSuccess,
  notifyLoginError,
  notifyAddSuccess,
  notifyAddError,
  notifyEditSuccess,
  notifyEditError,
  notifyDeleteSuccess,
  notifyDeleteError,
  notifyNotAuthorized,
  notifyAccessDenied,
  notifyNotEnoughImages,
};
