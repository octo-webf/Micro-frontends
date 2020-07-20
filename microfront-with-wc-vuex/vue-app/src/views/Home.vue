<template>
  <div>
    <header>
      <h1>To-do list with Vuex</h1>
      <form @submit="handleSubmit">
        <input id="todo" type="text" placeholder="A faire..." />
      </form>
    </header>
    <section>
      <ul>
        <li v-for="item in getFilteredTodoList" :key="item.id">
          <TodoItem :item="item" />
        </li>
      </ul>
    </section>
    <TodoFooter />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
import TodoFooter from "@/components/TodoFooter.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: { TodoItem, TodoFooter },
  computed: {
    ...mapGetters(["getFilteredTodoList"]),
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      this.$store.dispatch("addTodo", { text: event.target.todo.value });
      event.target.todo.value = "";
    },
  },
};
</script>

<style scoped>
#todo {
  outline: none;
  border: none;
  border-bottom: 1px solid lightgray;
  width: calc(400px + 5vw);
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-bottom: 10px;
}

@media screen and (max-width: 500px) {
  #todo {
    width: 300px;
  }
}

#todo:focus {
  border-bottom: 2px solid #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
