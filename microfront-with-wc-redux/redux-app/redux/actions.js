import * as types from "./actionTypes";

export const addToBasket = (product) => ({
  type: types.ADD_TO_BASKET,
  product,
});

export const removeFromBasket = (id) => ({
  type: types.REMOVE_FROM_BASKET,
  id,
});

export const removeAllFromBasket = () => ({
  type: types.REMOVE_ALL_FROM_BASKET,
});
