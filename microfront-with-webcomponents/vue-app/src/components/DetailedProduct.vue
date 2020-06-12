<template>
  <div class="item">
    <h2>Product Detail</h2>
    <div class="flex">
      <div>
        <h2>{{ product.name }}</h2>
        <h3>{{ product.price }}</h3>
        <h5>{{ product.tags }}</h5>
        <div class="button-cart" v-on:click="handleClick(product)">
          <h3>Add to cart</h3>
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
    product: Object
  },
  methods: {
    handleClick: product => {
      console.log(product);
      const event = new CustomEvent("addProductToCart", {
        bubbles: true,
        detail: { product }
      });
      window.dispatchEvent(event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h2 {
  text-align: center;
}

.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  align-items: flex-start;
}

.flex h2 {
  text-align: left;
}

.flex h3,
h4,
h5 {
  margin: 0;
}
h5 {
  font-weight: 200;
}
.button-cart {
  background-color: rgb(1, 131, 1);
  color: white;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  width: calc(100px + 5vw);
  padding: 2vh 5vw 2vh 5vw;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 10px lightgray;
  cursor: pointer;
}
.button-cart:active {
  position: relative;
  background-color: rgb(1, 116, 1);
  top: 3px;
}

#product-img {
  margin: auto;
  max-height: 50vh;
  max-width: 70vw;
}
</style>
