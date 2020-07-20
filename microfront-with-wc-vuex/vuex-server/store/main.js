const ADD_TODO = "ADD_TODO";
const EDIT_TODO = "EDIT_TODO";
const MARK_COMPLETED = "MARK_COMPLETED";
const DELETE_TODO = "DELETE_TODO";
const DELETE_ALL_TODO = "DELETE_ALL_TODO";

const CLEAR_COMPLETED = "CLEAR_COMPLETED";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

const SHOW_ALL = "SHOW_ALL";
const SHOW_ACTIVE = "SHOW_ACTIVE";
const SHOW_COMPLETED = "SHOW_COMPLETED";

function forceReactUpdate() {
  const updateEvent = new CustomEvent("forceUpdate");
  window.dispatchEvent(updateEvent);
}

const store = {
  state: {
    todoList: [],
    filter: SHOW_ALL,
  },
  mutations: {
    [ADD_TODO](state, { text }) {
      state.todoList.push({
        id:
          state.todoList.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) +
          1,
        text,
        completed: false,
      });
      forceReactUpdate();
    },
    [EDIT_TODO](state, { id, text }) {
      state.todoList = state.todoList.map((todo) => {
        return todo.id === id ? { ...todo, text } : todo;
      });
      forceReactUpdate();
    },
    [MARK_COMPLETED](state, { id }) {
      state.todoList = state.todoList.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
      forceReactUpdate();
    },
    [DELETE_TODO](state, { id }) {
      state.todoList = state.todoList.filter((item) => item.id !== id);
      forceReactUpdate();
    },
    [DELETE_ALL_TODO](state) {
      state.todoList = [];
      forceReactUpdate();
    },
    [CLEAR_COMPLETED](state) {
      state.todoList = state.todoList.filter((item) => item.completed !== true);
      forceReactUpdate();
    },
    [SET_VISIBILITY_FILTER](state, { filter }) {
      state.filter = filter;
      forceReactUpdate();
    },
  },
  actions: {
    addTodo(context, { text }) {
      context.commit(ADD_TODO, { text });
    },
    editTodo(context, { id, text }) {
      context.commit(EDIT_TODO, { id, text });
    },
    markCompleted(context, { id }) {
      context.commit(MARK_COMPLETED, { id });
    },
    deleteTodo(context, { id }) {
      context.commit(DELETE_TODO, { id });
    },
    deleteAllTodo(context) {
      context.commit(DELETE_ALL_TODO);
    },
    clearCompleted(context) {
      context.commit(CLEAR_COMPLETED);
    },
    setVisibilityFilter(context, { filter }) {
      context.commit(SET_VISIBILITY_FILTER, { filter });
    },
  },
  getters: {
    getFilteredTodoList(state) {
      switch (state.filter) {
        case SHOW_ALL:
          return state.todoList;
        case SHOW_ACTIVE:
          return state.todoList.filter((item) => item.completed === false);
        case SHOW_COMPLETED:
          return state.todoList.filter((item) => item.completed === true);
      }
    },
  },
  modules: {},
  // React Equivalent
  commit: (mutation, payload) => {
    return store.mutations[mutation](store.state, payload);
  },
};

window.store = store;
