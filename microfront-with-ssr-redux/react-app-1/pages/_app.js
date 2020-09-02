import "../styles/globals.css";
import { Provider } from "react-redux";

import store from "../redux/sessionStore";

function MyApp({ Component }) {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

export default MyApp;
