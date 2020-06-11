<template>
  <div class="item">
    <h2>Product Detail</h2>
    <div class="flex">
      <div>
        <h2>{{ product.name }}</h2>
        <h3>{{ product.price }}</h3>
        <h5>{{ product.tags }}</h5>
        <div class="button-cart" v-on:click="handleClick(product)">
          <h4>Add to cart</h4>
        </div>
      </div>
      <img :src="product.imgURL" id="product-img" alt="product-img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailedProduct",
  props: {
    product: Object,
  },
  methods: {
    handleClick: (product) => {
      console.log(product);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 10px lightgray;
  width: calc(200px + 20vw);
  padding: calc(10px + 1vw);
  margin: auto;
}

.item .flex {
  text-align: left;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
}

.flex h2,
h3,
h4,
h5 {
  margin: 0;
}
.item h5 {
  font-weight: 200;
}
.button-cart {
  background-color: rgb(1, 131, 1);
  color: white;
  text-align: center;
  padding: 10px 10px 10px 10px;
  margin-top: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 10px lightgray;
  cursor: pointer;
}

#product-img {
  max-width: 50%;
}
</style>
