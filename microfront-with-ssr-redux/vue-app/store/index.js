import { syncSessionStorage } from "../helpers/sessionHelpers";

const ADD_FROM_STORAGE = "ADD_FROM_STORAGE";
const REMOVE_ONE_ITEM = "REMOVE_ONE_ITEM";
const REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS";

const CLEAR_BASKET = "CLEAR_BASKET";

export const state = () => ({
  basket: [],
});

export const mutations = {
  [ADD_FROM_STORAGE](state) {
    if (typeof sessionStorage !== "undefined") {
      let state_string = sessionStorage.getItem("store.state");
      let _state = JSON.parse(state_string);
      state.basket = _state.basket;
      console.log("SUCCESS");
    } else {
      console.log("ERROR");
    }
  },
  [REMOVE_ONE_ITEM](state, { id }) {
    if (state.basket.filter((item) => item.id === id).quantity === 1) {
      state.basket = state.basket.filter((item) => item.id !== id);
    } else {
      state.basket = state.basket.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item;
      });
    }
    return syncSessionStorage(state);
  },
  [REMOVE_ALL_ITEMS](state, { id }) {
    state.basket = state.basket.filter((item) => item.id !== id);
    return syncSessionStorage(state);
  },
  [CLEAR_BASKET](state) {
    state.basket = [];
    return syncSessionStorage(state);
  },
};

export const actions = {
  addFromStorage(context) {
    context.commit(ADD_FROM_STORAGE);
  },
  removeOneItem(context, { id }) {
    context.commit(REMOVE_ONE_ITEM, { id });
  },
  removeAllItems(context, { id }) {
    context.commit(REMOVE_ALL_ITEMS, { id });
  },
  clearBasket(context) {
    context.commit(CLEAR_BASKET);
  },
};

export const getters = {
  getBasket(state) {
    return state.basket;
  },
};
