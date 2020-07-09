import { combineReducers } from "redux";

import basket from "./basketReducer";
import productListReducer from "./productListReducer";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  basket,
  productListReducer,
  visibilityFilter,
});

export default rootReducer;
