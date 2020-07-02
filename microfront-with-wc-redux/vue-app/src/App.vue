<template>
  <section>
    <div v-if="showList">
      <productList />
    </div>
    <div v-else>
      <button v-on:click="() => (showList = true)">Produit</button>
      <productDetail />
    </div>
  </section>
</template>

<script>
import productList from "./components/productList.vue";
import productDetail from "./components/productDetails.vue";

export default {
  name: "App",
  components: {
    productList,
    productDetail,
  },
  data() {
    return {
      showList: true,
    };
  },
};
</script>

<style>
section {
  color: #2c3e50;
  margin-top: 60px;
  background-color: white;
  border: 1px solid lightgray;
  box-shadow: 0 0 10px lightgray;
  min-width: 200px;
  margin: auto;
  padding: 50px;
}
</style>
