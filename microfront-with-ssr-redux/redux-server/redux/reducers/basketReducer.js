import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  REMOVE_ALL_FROM_BASKET,
} from "../actionTypes";

const initialState = [
  {
    id: 0,
    product: {
      id: 0,
      name: "GTA V",
      price: "49€",
      imgURL:
        "https://www.cdiscount.com/pdt2/7/9/8/1/700x700/son3491951945798/rw/gta-v-ps4.jpg",
      tags: "Adult, Violence, Drugs",
      category: "Video Games",
    },
    quantity: 1,
  },
];

const basket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      if (
        state.filter((item) => item.product === action.product).length === 0
      ) {
        return [
          ...state,
          {
            id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
            product: action.product,
            quantity: 1,
          },
        ];
      } else {
        return state.map((item) => {
          return item.product === action.product
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item;
        });
      }
    case REMOVE_FROM_BASKET:
      return state.filter((product) => product.id !== action.id);
    case REMOVE_ALL_FROM_BASKET:
      return initialState;
    default:
      return state;
  }
};

export default basket;
