const angularapp = document.querySelector("angular-app");
const angularsecondapp = document.querySelector("angular-second-app");
const reactapp = document.querySelector("react-app");
const secondapp = document.querySelector("second-app");

function sendUsername(value) {
  const event = new CustomEvent("usernameEvent", {
    bubbles: true,
    detail: { username: value },
  });
  window.dispatchEvent(event);
}

function setAuthMode(bool) {
  const event = new CustomEvent("setAuthEvent", {
    bubbles: true,
    detail: { isAuth: bool },
  });
  window.dispatchEvent(event);
}
