import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  REMOVE_ALL_FROM_BASKET,
} from "../actionTypes";
const initialState = [];

const basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [
        ...state,
        {
          id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          product: action.product,
        },
      ];
    case REMOVE_FROM_BASKET:
      return state.filter((product) => product.id !== action.id);
    case REMOVE_ALL_FROM_BASKET:
      return initialState;
    default:
      return state;
  }
};

export default basket;
