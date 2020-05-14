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
  angularapp.contentWindow.postMessage(input, ANGULAR_URL);
  reactapp.contentWindow.postMessage(input, REACT_URL);
  vueapp.contentWindow.postMessage(input, VUE_URL);

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

  // Message from Angular to the other micro-frontends
  if (
    event.origin === ANGULAR_URL &&
    event.data !== "Angular: I got the message!"
  ) {
    logMessageToConsole("Angular: " + event.data);
    reactapp.contentWindow.postMessage(event.data, "*");
    vueapp.contentWindow.postMessage(event.data, "*");
    return;
  }
  logMessageToConsole(event.data);
}
