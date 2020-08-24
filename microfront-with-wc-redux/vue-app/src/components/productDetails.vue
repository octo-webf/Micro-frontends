<template id="productDetail">
  <div class="flex">
    <div>
      <h1>{{ product.name }}</h1>
      <h2>{{ product.price }}</h2>
      <p>{{ product.tags }}</p>
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
h1,
h2,
p {
  margin: 0;
}

.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  align-items: flex-start;
}
.image {
  height: 50vh;
}

react-button {
  margin: 10px;
}

@media screen and (max-width: 500px) {
  .image {
    height: auto;
    width: 60vw;
    margin: 10px auto;
  }
}
</style>
