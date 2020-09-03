import {
  ADD_TO_BASKET,
  DELETE_FROM_BASKET,
  FETCH_SESSION_STATE,
  FETCH_SESSION_STATE_SUCCESS,
  FETCH_SESSION_STATE_ERROR,
} from "../actionTypes";
import { syncSessionStorage } from "../../utils/sessionHelpers";

let initialState = { loading: false, error: null, basket: [] };

const basket = (state = initialState, action) => {
  let add_list;
  switch (action.type) {
    case ADD_TO_BASKET:
      add_list = state.basket;
      if (
        state.basket.filter((item) => item.product === action.product)
          .length === 0
      ) {
        add_list.push({
          id:
            state.basket.reduce((maxId, item) => Math.max(item.id, maxId), -1) +
            1,
          product: action.product,
          quantity: 1,
        });
      } else {
        add_list = state.basket.map((item) => {
          return item.product === action.product
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item;
        });
      }
      syncSessionStorage(add_list);
      return {
        ...state,
        basket: add_list,
      };
    case DELETE_FROM_BASKET:
      let delete_list = state.basket;
      syncSessionStorage(delete_list);
      return {
        ...state,
        basket: delete_list.filter((item) => item.id !== action.id),
      };
    case FETCH_SESSION_STATE:
      return { ...state, loading: true, error: null };
    case FETCH_SESSION_STATE_SUCCESS:
      return { ...state, loading: false, basket: action.basket };
    case FETCH_SESSION_STATE_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default basket;
