<template id="productDetail">
  <div class="flex">
    <div>
      <h2>{{ product.name }}</h2>
      <h1>{{ product.price }}</h1>
      <h4>{{ product.tags }}</h4>
      <react-button :product="productString"></react-button>
    </div>
    <img class="image" :src="product.imgURL" />
  </div>
</template>

<script>
export default {
  name: "productDetails",
  props: ["product"],
  data() {
    return {
      productString: JSON.stringify(this.product),
    };
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.image {
  height: 50vh;
}
</style>
