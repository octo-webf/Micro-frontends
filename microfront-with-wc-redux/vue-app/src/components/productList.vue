<template>
  <div>
    <h2>Liste des produits</h2>
    <div class="flex">
      <button
        id="filter-all"
        v-on:click="actions.setVisibilityFilter(SHOW_ALL)"
      >
        All
      </button>
      <button
        id="filter-videogames"
        v-on:click="actions.setVisibilityFilter(SHOW_VIDEO_GAMES)"
      >
        Video Games
      </button>
      <button
        id="filter-phones"
        v-on:click="actions.setVisibilityFilter(SHOW_PHONES)"
      >
        Smartphones
      </button>
      <button
        id="filter-computers"
        v-on:click="actions.setVisibilityFilter(SHOW_COMPUTERS)"
      >
        Computers
      </button>
    </div>
    <ul class="flex">
      <li v-for="item in products" :key="item.id">
        <previewProduct
          :product="item"
          v-on:selectedProduct="(product) => $emit('selectedproduct', product)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import previewProduct from "./previewProduct";

export default {
  name: "productList",
  components: {
    previewProduct,
  },
  mounted() {
    let t = this;
    window.actions.fetchProducts(t.dispatch);
  },
  props: ["actions", "products", "dispatch"],
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

ul {
  padding-left: 0;
  list-style-type: none;
}
</style>
