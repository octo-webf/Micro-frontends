const angularapp = document.getElementById("angular-app");
const reactapp = document.getElementById("react-app");
const vueapp = document.getElementById("vue-app");

const ANGULAR_URL = "http://localhost:5001";
const REACT_URL = "http://localhost:5002";
const VUE_URL = "http://localhost:5003";

const html_console = document.getElementById("console");

function logMessageToConsole(message) {
  html_console.innerHTML += "> " + message + "<br/>";
}

// Passing data to child applications via DOM events
function sendMessage(input) {
  const message = { info: input, callback: false };

  angularapp.contentWindow.postMessage(message, ANGULAR_URL);
  reactapp.contentWindow.postMessage(message, REACT_URL);
  vueapp.contentWindow.postMessage(message, VUE_URL);

  logMessageToConsole("Wrapper: Message sent to the micro-frontends");
}

// Receiving data from child applications
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (
    event.origin !== ANGULAR_URL &&
    event.origin !== REACT_URL &&
    event.origin !== VUE_URL
  ) {
    return;
  }

  if (event.origin === ANGULAR_URL && !event.data.callback) {
    logMessageToConsole("Angular: " + event.data.info);
    reactapp.contentWindow.postMessage(event.data, REACT_URL);
    vueapp.contentWindow.postMessage(event.data, VUE_URL);
    return;
  }

  logMessageToConsole(event.data.info);
}
