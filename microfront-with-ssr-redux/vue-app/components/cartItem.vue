<template>
  <section class="container">
    <div class="img-container">
      <img :src="product.imgURL" :alt="`product-${product.id}`" />
    </div>
    <div class="description">
      <h3>{{ product.name }}</h3>
      <p>{{ product.tags }}</p>
    </div>
    <p class="pricing">
      {{ product.price }} x{{ quantity }} =
      <b>{{ totalPrice(product.price, quantity) }}€</b>
    </p>
    <div class="modifications">
      <button class="btn delete-one" @click="() => removeOneItem({ id })">
        -
      </button>
      <button class="btn delete-all" @click="() => removeAllItems({ id })">
        x
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CartItem",
  props: ["id", "product", "quantity"],
  methods: {
    ...mapActions(["removeOneItem", "removeAllItems"]),
    totalPrice(price, quantity) {
      let price_string = price.split("€")[0];
      let totalPrice = quantity * parseInt(price_string);
      return totalPrice;
    },
  },
};
</script>

<style scoped>
h3,
p {
  margin: 0;
}
.img-container {
  width: 10vw;
  display: block;
}
img {
  max-height: 13vh;
}

.description {
  width: 25vw;
}

.pricing {
  width: 10vw;
  text-align: right;
}

.container {
  display: flex;
  box-shadow: 0 0 8px lightgray;
  border-radius: 10px;
  align-items: center;
  height: 15vh;
  width: 60vw;
  margin: auto;
  padding: 0 10px;
  position: relative;
  transition: 0.2s ease-out;
}

.container:hover {
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
}
</style>
