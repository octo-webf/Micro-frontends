const PARENT_APP_URL = "http://localhost:8000";

window.sendMessage = (number, message) => {
  window.postMessage({ message: message, microfront: number }, PARENT_APP_URL);
};
