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

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});

// fetch
export const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS,
});
export const fetchProductsSuccess = (products) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  products,
});
export const fetchProductsError = (error) => ({
  type: types.FETCH_PRODUCTS_ERROR,
  error,
});

export const fetchProducts = (dispatch) => {
  dispatch(fetchProductsBegin());
  return fetch("http://localhost:4200/products.json")
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res;
    })
    .then((res) => res.json())
    .then((list) => {
      dispatch(fetchProductsSuccess(list.products));
      return list.products;
    })
    .catch((error) => dispatch(fetchProductsError(error)));
};
