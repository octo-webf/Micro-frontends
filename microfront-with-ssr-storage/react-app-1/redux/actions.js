import * as types from "./actionTypes";

export const addToBasket = (product) => ({
  type: types.ADD_TO_BASKET,
  product,
});

export const deleteFromBasket = (id) => ({
  type: types.DELETE_FROM_BASKET,
  id,
});

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter,
});

// SESSION STORE
export const fetchSessionStateBegin = () => ({
  type: types.FETCH_SESSION_STATE,
});
export const fetchSessionStateSuccess = (state) => ({
  type: types.FETCH_SESSION_STATE_SUCCESS,
  basket: state.basket,
});
export const fetchSessionStateError = (error) => ({
  type: types.FETCH_SESSION_STATE_ERROR,
  error,
});

export async function fetchSessionState(dispatch) {
  let _state;
  let state_string;
  dispatch(fetchSessionStateBegin);
  return new Promise(() => {
    if (typeof sessionStorage !== "undefined") {
      state_string = sessionStorage.getItem("store.state");
      _state = JSON.parse(state_string);
      console.log("SUCCESS");
      dispatch(fetchSessionStateSuccess(_state));
    } else {
      console.log("ERROR");
      dispatch(fetchSessionStateError(_state));
    }
  });
}

// PRODUCT LIST
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
  return fetch("http://localhost:3100/products.json")
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
