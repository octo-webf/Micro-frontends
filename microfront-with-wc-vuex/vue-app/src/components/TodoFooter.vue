<template>
  <footer>
    <div class="filters">
      <button @click="() => setVisibilityFilter({ filter: SHOW_ALL })">
        All
      </button>
      <button @click="() => setVisibilityFilter({ filter: SHOW_ACTIVE })">
        Active
      </button>
      <button @click="() => setVisibilityFilter({ filter: SHOW_COMPLETED })">
        Completed
      </button>
    </div>
    <div class="deletion">
      <p class="clear" @click="clearCompleted">Clear completed</p>
      <p class="delete" @click="deleteAllTodo">Delete all</p>
    </div>
  </footer>
</template>

<script>
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "@/constants.js";
import { mapActions } from "vuex";
export default {
  name: "TodoFooter",
  methods: {
    ...mapActions(["setVisibilityFilter", "clearCompleted", "deleteAllTodo"]),
  },
  data() {
    return {
      SHOW_ALL,
      SHOW_COMPLETED,
      SHOW_ACTIVE,
    };
  },
};
</script>

<style scoped>
.filters {
  display: flex;
  justify-content: center;
}
.deletion {
  display: flex;
  justify-content: space-evenly;
}
button {
  width: 100px;
  margin: 0 10px 0 10px;
  border: 1px solid lightgray;
  outline: none;
}
button:active {
  background-color: lightgray;
}
.clear {
  cursor: pointer;
  color: gray;
}
.delete {
  cursor: pointer;
  color: red;
}
</style>
