import { createStore, applyMiddleware } from "redux";
import { useMemo } from "react";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

const initialState = [];
const defaultReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function initStore(preloadedState = initialState, reducer) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = () => {
  if (typeof window === "undefined") {
    store = createStore(
      defaultReducer,
      initialState,
      composeWithDevTools(applyMiddleware())
    );
  } else {
    store = window.store;
  }
  return store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(), [initialState]);
  return store;
}
