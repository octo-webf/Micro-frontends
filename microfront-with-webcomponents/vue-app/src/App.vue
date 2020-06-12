<template>
  <div id="app">
    <img id="vue-img" alt="Vue logo" src="./assets/logo.png" />
    <DetailedProduct :product="product" />
  </div>
</template>

<script>
import DetailedProduct from "./components/DetailedProduct";

export default {
  name: "App",
  components: {
    DetailedProduct
  },
  mounted() {
    window.addEventListener("detailProduct", event => {
      console.log("event received");
      this.product = event.detail.product;
    });
  },
  props: [],
  data() {
    return {
      product: {
        id: 0,
        name: "GTA V",
        price: "49€",
        imgURL:
          "https://www.cdiscount.com/pdt2/7/9/8/1/700x700/son3491951945798/rw/gta-v-ps4.jpg",
        tags: "Adult, Violence, Drugs"
      }
    };
  }
};
</script>

<style>
#app {
  color: #2c3e50;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 10px lightgray;
  margin: auto;
  padding: calc(10px + 1vw);
}

#vue-img {
  position: relative;
  top: 40px;
  margin-top: -50px;
  width: 50px;
}
</style>
