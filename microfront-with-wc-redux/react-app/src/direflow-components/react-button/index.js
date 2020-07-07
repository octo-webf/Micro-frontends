import { DireflowComponent } from "direflow-component";
import Button from "./Button";
import React from "react";
import { Provider } from "react-redux";

const ProvidedApp = (props) => {
  const product = JSON.parse(props.product);
  return (
    <Provider store={window.store}>
      <Button product={product} />
    </Provider>
  );
};
ProvidedApp.defaultProps = {
  product: { name: "N/A", id: -1 },
};

export default DireflowComponent.create({
  component: ProvidedApp,
  configuration: {
    tagname: "react-button",
  },
  plugins: [],
});
