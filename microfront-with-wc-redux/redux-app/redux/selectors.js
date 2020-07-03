import { createSelector } from "reselect";

import {
  SHOW_ALL,
  SHOW_VIDEO_GAMES,
  SHOW_PHONES,
  SHOW_COMPUTERS,
} from "./constants";

const getProductList = (state) => state.productList;
const getVisibilityFilter = (state) => state.visibilityFilter;

export const getVisibleProductList = createSelector(
  [getVisibilityFilter, getProductList],
  (visibilityFilter, productList) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return productList;
      case SHOW_VIDEO_GAMES:
        return productList.filter((p) => p.category !== "Video Games");
      case SHOW_PHONES:
        return productList.filter((p) => p.category !== "Smartphones");
      case SHOW_COMPUTERS:
        return productList.filter((p) => p.category !== "Computers");
      default:
        throw new Error("Unknown filter :" + visibilityFilter);
    }
  }
);

export const getBasket = (state) => state.basket;
