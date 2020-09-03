<template>
  <div>
    <h2>Your cart</h2>
    <ul v-if="getBasket.length > 0">
      <li v-for="item in getBasket" :key="item.id">
        <CartItem
          :id="item.id"
          :product="item.product"
          :quantity="item.quantity"
        />
      </li>
    </ul>
    <ul v-else>
      <li>
        <CartItemSkeleton />
      </li>
      <li>
        <CartItemSkeleton />
      </li>
      <li>
        <CartItemSkeleton />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "../components/cartItem";
import CartItemSkeleton from "../components/cartItemSkeleton";
import { initSessionStorage } from "../helpers/sessionHelpers";

export default {
  computed: {
    ...mapGetters(["getBasket"]),
  },
  components: {
    CartItem,
    CartItemSkeleton,
  },
  mounted() {
    initSessionStorage();
    this.$store.dispatch("addFromStorage");
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

h2 {
  margin-top: 10px auto;
  font-size: 32px;
  text-align: center;
}

p {
  margin-top: 10px auto;
  text-align: center;
}

* {
  box-sizing: border-box;
}

ul {
  margin: auto;
  padding-left: 0;
}

li {
  list-style-type: none;
}
</style>
