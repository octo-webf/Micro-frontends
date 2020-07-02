import { combineReducers } from "redux";

import basketReducer from "./basketReducer";
import productListReducer from "./productListReducer";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  basketReducer,
  productListReducer,
  visibilityFilter,
});

export default rootReducer;
