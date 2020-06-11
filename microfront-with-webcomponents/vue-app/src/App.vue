<template>
  <div id="app">
    <img id="vue-img" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="First Vue Micro-Frontend" />
    <DetailedProduct :product="product" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DetailedProduct from "./components/DetailedProduct";

export default {
  name: "App",
  components: {
    HelloWorld,
    DetailedProduct,
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
        tags: "Adult, Violence, Drugs",
      },
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  font-family: sans-serif;
  margin: auto;
}

#vue-img {
  padding-top: 60px;
  height: 150px;
}
</style>
