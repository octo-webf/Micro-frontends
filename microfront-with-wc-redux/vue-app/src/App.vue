<template>
  <Provider
    :store="store"
    :mapStateToProps="mapStateToProps"
    :mapDispatchToProps="mapDispatchToProps"
  >
    <template #default="{filteredProducts, actions, dispatch}">
      <section>
        <div v-if="showList">
          <productList
            :actions="actions"
            :products="filteredProducts"
            :dispatch="dispatch"
            v-on:selectedproduct="handleSelectedProduct"
          />
        </div>
        <div v-else>
          <button class="btn" v-on:click="() => (showList = true)">
            Retour
          </button>
          <productDetail :product="productSelected" />
        </div>
      </section>
    </template>
  </Provider>
</template>

<script>
import productList from "./components/productList.vue";
import productDetail from "./components/productDetails.vue";
import { bindActionCreators } from "redux";
import Vue from "vue";

Vue.config.ignoredElements = ["react-button"];

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
      productSelected: {},
    };
  },
  methods: {
    mapStateToProps(state) {
      return {
        filteredProducts: window.selectors.getVisibleProductList(state),
      };
    },
    mapDispatchToProps(dispatch) {
      return {
        actions: bindActionCreators(window.actions, dispatch),
        dispatch,
      };
    },
    handleSelectedProduct(product) {
      this.productSelected = product;
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
  border-radius: 5px;
  box-shadow: 0 0 10px lightgray;
  min-width: 200px;
  margin: auto;
  padding: 50px;
}

.btn {
  border-radius: 5px;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px lightgray;
  width: calc(150px + 2vw);
  height: 30px;
  text-align: center;
  cursor: pointer;
}
</style>
