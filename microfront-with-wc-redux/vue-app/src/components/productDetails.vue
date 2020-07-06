<template>
  <div>
    <h2>{{ product.name }}</h2>
    <h1>{{ product.price }}</h1>
    <react-button></react-button>
  </div>
</template>

<script>
export default {
  name: "productDetails",
  props: ["product"],
  mounted() {
    const component = document.querySelector("react-button");
    component.product = this.product;
  },
};
</script>
