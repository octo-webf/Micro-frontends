import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import App from "./App";
import Navigation from "./Components/Navigation";

describe("<App />", () => {
  it("should render without crashing", () => {
    const app = shallow(<App />);
  });
});

describe("<Navigation />", () => {
  it("should render without crashing", () => {
    const navigation = shallow(<Navigation />);
  });
});
