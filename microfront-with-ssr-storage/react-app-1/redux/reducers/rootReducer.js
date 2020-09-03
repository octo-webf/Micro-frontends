import { combineReducers } from "redux";

import basket from "./basketReducer";
import productsList from "./productsReducer";

const rootReducer = combineReducers({
  basket,
  productsList,
});

export default rootReducer;
