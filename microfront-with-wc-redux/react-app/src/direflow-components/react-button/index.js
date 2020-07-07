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
  product: JSON.stringify({
    name: "N/A",
    id: -1,
    tags: "tags",
    price: "1000€",
    imgURL:
      "https://www.cdiscount.com/pdt2/7/9/8/1/700x700/son3491951945798/rw/gta-v-ps4.jpg",
  }),
};

export default DireflowComponent.create({
  component: ProvidedApp,
  configuration: {
    tagname: "react-button",
  },
  plugins: [],
});
