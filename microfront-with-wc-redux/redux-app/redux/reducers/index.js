import { combineReducers } from "redux";

import basket from "./basketReducer";
import productList from "./productListReducer";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  basket,
  productList,
  visibilityFilter,
});

export default rootReducer;
