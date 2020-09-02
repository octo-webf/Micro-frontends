<template>
  <div class="container-cart-item">
    <div class="img-container"></div>
    <div class="description">
      <div class="product-name"></div>
      <div class="product-tags"></div>
    </div>
    <div class="product-pricing"></div>
    <div class="modifications">
      <div class="btn delete-one"></div>
      <div class="btn delete-all"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CartItemSkeleton",
};
</script>

<style scoped>
.img-container {
  height: 13vh;
  width: 10vw;
  background: #d3d3d3a6;
  border-radius: 10px;
}

.description {
  width: 25vw;
}

.product-name {
  height: 16px;
  width: 70%;
  margin: 10px;
  background: #d3d3d3a6;
  border-radius: 10px;
}

.product-tags {
  height: 12px;
  margin: 10px;
  width: 40%;
  background: #d3d3d3a6;
  border-radius: 10px;
}

.product-pricing {
  width: 8vw;
  height: 12px;
  background: #d3d3d3a6;
  border-radius: 10px;
}

.container-cart-item {
  display: flex;
  box-shadow: 0 0 8px lightgray;
  border-radius: 10px;
  align-items: center;
  height: 15vh;
  width: 60vw;
  margin: 10px auto;
  padding: 0 10px;
  position: relative;
  transition: 0.2s ease-out;
}

.container-cart-item:hover {
  top: -3px;
  box-shadow: 0 2px 8px lightgray;
}

.modifications {
  width: 15vw;
  display: flex;
  justify-content: center;
}

.btn {
  cursor: pointer;
  border: none;
  border-radius: 50px;
  width: 5vh;
  height: 5vh;
  margin: 5px;
  font-size: 2vw;
  font-weight: lighter;
  background-color: #d3d3d3a6;
}
</style>
