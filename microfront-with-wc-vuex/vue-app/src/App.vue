<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store(window.store);

export default {
  name: "App",
  components: {
    Home,
  },
  store,
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
