import {
  ADD_TO_BASKET,
  DELETE_FROM_BASKET,
  FETCH_SESSION_STATE,
  FETCH_SESSION_STATE_SUCCESS,
  FETCH_SESSION_STATE_ERROR,
} from "../actionTypes";

let initialState = { loading: false, error: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      let add_list = state.basket;
      add_list.push({
        id:
          state.basket.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) +
          1,
        text: action.text,
        completed: false,
      });
      return {
        ...state,
        basket: add_list,
      };
    case DELETE_FROM_BASKET:
      let delete_list = state.basket;
      return {
        ...state,
        basket: delete_list.filter((item) => item.id !== action.id),
      };
    case FETCH_SESSION_STATE:
      return { ...state, loading: true, error: null };
    case FETCH_SESSION_STATE_SUCCESS:
      return { ...state, loading: false, todoList: action.todo.todoList };
    case FETCH_SESSION_STATE_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
