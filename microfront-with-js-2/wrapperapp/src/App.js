import React from "react";
import "./App.css";
import MicroFrontend from "./MicroFrontend";
/*
const {
  MICROAPP1_HOST: microApp1Host,
  MICROAPP2_HOST: microApp2Host,
} = process.env;
*/
const microApp1Host = "http://localhost:3001";
const microApp2Host = "http://localhost:3002";

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
      <MicroApp1 />
      <MicroApp2 />
    </>
  );
}

export default App;
