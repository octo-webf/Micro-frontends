import { DireflowComponent } from "direflow-component";
import React from "react";
import App from "./App";
import { Provider } from "react-redux";

const ProvidedApp = () => {
  return (
    <Provider store={window.store}>
      <App />
    </Provider>
  );
};

export default DireflowComponent.create({
  component: ProvidedApp,
  configuration: {
    tagname: "react-app",
  },
  plugins: [],
});
