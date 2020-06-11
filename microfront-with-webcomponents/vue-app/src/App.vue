<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="First Vue Micro-Frontend" />
    <DetailedProduct msg="Product Detail" />
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
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
