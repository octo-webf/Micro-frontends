<template>
  <div>
    <h2>Liste des produits</h2>
    <div class="flex">
      <button v-on:click="actions.setVisibilityFilter(SHOW_ALL)">All</button>
      <button v-on:click="actions.setVisibilityFilter(SHOW_VIDEO_GAMES)">
        Video Games
      </button>
      <button v-on:click="actions.setVisibilityFilter(SHOW_PHONES)">
        Smartphones
      </button>
      <button v-on:click="actions.setVisibilityFilter(SHOW_COMPUTERS)">
        Computers
      </button>
    </div>
    <div class="flex">
      <div v-for="item in products" :key="item.id">
        <previewProduct
          :product="item"
          v-on:selectedProduct="(product) => $emit('selectedProduct', product)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import previewProduct from "./previewProduct";

export default {
  name: "productList",
  components: {
    previewProduct,
  },
  props: ["actions", "products"],
  data() {
    return {
      SHOW_ALL: "SHOW_ALL",
      SHOW_VIDEO_GAMES: "SHOW_VIDEO_GAMES",
      SHOW_PHONES: "SHOW_PHONES",
      SHOW_COMPUTERS: "SHOW_COMPUTERS",
    };
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
button {
  margin: 10px;
  width: 100px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
}
</style>
