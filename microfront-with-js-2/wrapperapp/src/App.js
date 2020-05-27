import React from "react";
import "./App.css";
import MicroFrontend from "./MicroFrontend";

const {
  REACT_APP_MICRO_1: microApp1Host,
  REACT_APP_MICRO_2: microApp2Host,
} = process.env;

const MicroApp1 = ({ history }) => {
  return (
    <MicroFrontend history={history} name="MicroApp1" host={microApp1Host} />
  );
};
const MicroApp2 = ({ history }) => {
  return (
    <MicroFrontend history={history} name="MicroApp2" host={microApp2Host} />
  );
};

function App() {
  return (
    <>
      <h1>Ça va marcher</h1>
      <div class="flex">
        <MicroApp1 />
        <MicroApp2 />
      </div>
    </>
  );
}

export default App;
