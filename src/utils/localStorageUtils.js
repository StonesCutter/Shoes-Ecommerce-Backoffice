function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function clearLocalStorage(key) {
  localStorage.clear(key);
}

export { getLocalStorage, setLocalStorage, clearLocalStorage };
