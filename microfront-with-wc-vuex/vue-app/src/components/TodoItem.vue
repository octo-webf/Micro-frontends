<template>
  <div class="item">
    <div v-if="isEdit">
      <form @submit="handleSubmit">
        <input type="text" :value="item.text" class="form" />
      </form>
    </div>
    <div v-else class="flex">
      <img
        src="https://image.flaticon.com/icons/svg/1442/1442912.svg"
        alt="check"
        class="icon"
        @click="handleCompleted"
      />
      <p v-if="item.completed" @click="handleEdit" class="completed">
        {{ item.text }}
      </p>
      <p v-else @click="handleEdit">{{ item.text }}</p>
      <img
        src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
        alt="delete"
        class="icon"
        @click="handleDelete"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      isEdit: false,
    };
  },
  props: ["item"],
  methods: {
    handleEdit() {
      this.isEdit = true;
    },
    handleDelete() {
      this.$store.dispatch("deleteTodo", { id: this.item.id });
    },
    handleCompleted() {
      this.$store.dispatch("markCompleted", { id: this.item.id });
    },
    handleSubmit(event) {
      event.preventDefault();
      this.$store.dispatch("editTodo", {
        id: this.item.id,
        text: event.target[0].value,
      });
      this.isEdit = false;
    },
  },
};
</script>

<style scoped>
.item {
  width: calc(400px + 5vw);
  height: 50px;
  border: 1px solid lightgray;
  margin: 1vh auto 1vh auto;
  border-radius: 5px;
  box-shadow: 0 0 3px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.completed {
  text-decoration: line-through;
}

.form {
  outline: none;
  border: none;
  border-bottom: 1px solid lightgray;
  width: 80%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.form:focus {
  border-bottom: 2px solid #42b983;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  width: 20px;
  opacity: 0.2;
  margin: 15px;
}
.icon:hover {
  width: 32px;
  cursor: pointer;
}

p:hover {
  cursor: pointer;
  font-weight: bold;
}

@media screen and (max-width: 500px) {
  .item {
    width: 300px;
  }
}
</style>
