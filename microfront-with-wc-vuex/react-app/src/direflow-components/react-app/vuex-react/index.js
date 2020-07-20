import React, { useContext, useState, useCallback } from "react";

const VuexContext = React.createContext(null);

export const Provider = ({ children, store }) => {
  return <VuexContext.Provider value={store}>{children}</VuexContext.Provider>;
};

export const useGetter = (_getter) => {
  console.log("useGetter");

  //force update
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  window.removeEventListener("forceUpdate", () => forceUpdate());
  window.addEventListener("forceUpdate", () => forceUpdate());

  const context = useContext(VuexContext);
  return context.getters[_getter](context.state);
};

export const useDispatch = () => {
  const context = useContext(VuexContext);
  return (action, payload = null) => {
    console.log("useAction");
    context.actions[action](context, payload);
  };
};

export const useMutations = (_mutations = []) => {
  console.log("useMutations");

  const context = useContext(VuexContext);
  if (_mutations.length === 0) {
    return context.mutations;
  } else if (_mutations.length === 1) {
    return context.mutations[_mutations[0]];
  } else {
    var mut = [];
    _mutations.forEach((m) => {
      mut.push(context.mutations[m]);
    });
    return mut;
  }
};
/*
export const connect = (Component) => () => {
    console.log('connect')
    return (
        <VuexContext.Consumer>
            {value => <Component value={value} />}
        </VuexContext.Consumer>
    )
}
*/
