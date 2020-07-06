<template>
  <Provider
    :store="store"
    :mapStateToProps="mapStateToProps"
    :mapDispatchToProps="mapDispatchToProps"
  >
    <template #default="{filteredProducts, actions}">
      <section>
        <div v-if="showList">
          <button v-on:click="() => (showList = false)">Produit</button>
          <productList
            :actions="actions"
            :products="filteredProducts"
            v-on:selectedProduct="handleSelectedProduct"
          />
        </div>
        <div v-else>
          <button v-on:click="() => (showList = true)">
            Liste des produits
          </button>
          <productDetail :product="filteredProducts[id]" />
        </div>
      </section>
    </template>
  </Provider>
</template>

<script>
import productList from "./components/productList.vue";
import productDetail from "./components/productDetails.vue";
import { bindActionCreators } from "redux";

import Provider from "vuejs-redux";

export default {
  name: "App",
  components: {
    productList,
    productDetail,
    Provider,
  },
  data() {
    return {
      showList: true,
      store: window.store,
      id: 0,
    };
  },
  methods: {
    mapStateToProps(state) {
      return {
        filteredProducts: window.selectors.getVisibleProductList(state),
      };
    },
    mapDispatchToProps(dispatch) {
      return { actions: bindActionCreators(window.actions, dispatch) };
    },
    handleSelectedProduct(product) {
      console.log("received");
      this.id = product.id;
      this.showList = false;
    },
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
