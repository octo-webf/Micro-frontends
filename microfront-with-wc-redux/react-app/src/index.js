import ReactApp from "./direflow-components/react-app";
import Button from "./direflow-components/react-button";

ReactApp.then((element) => {
  console.log("react-app is mounted on the DOM", element);
});

Button.then((element) => {
  console.log("react-button is mounted on the DOM", element);
});
