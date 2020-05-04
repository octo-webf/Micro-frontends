const ngapp = document.getElementById("ng-app");
const reactapp = document.getElementById("react-app");
const vueapp = document.getElementById("vue-app");

const html_console = document.getElementById("console");

function logMessage(message) {
  html_console.innerHTML += "> " + message + "<br/>";
}

// Passing data to child applications via DOM events
function message(input) {
  ngapp.contentWindow.postMessage(input, "*");
  reactapp.contentWindow.postMessage(input, "*");
  vueapp.contentWindow.postMessage(input, "*");

  logMessage("Wrapper: Message sent to the micro-frontends");
}

// Receiving data from child applications
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (
    event.origin !== "http://localhost:5001" &&
    event.origin !== "http://localhost:5002" &&
    event.origin !== "http://localhost:5003"
  ) {
    return;
  }
  console.log(event.data);
  logMessage(event.data);
}
