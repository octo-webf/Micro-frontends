import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export function updateSessionState(store) {
  let { loading, error, ...state } = store.getState();
  console.log(state);
  let state_string = JSON.stringify(state);
  sessionStorage.setItem("store.state", state_string);
}

export default store;
