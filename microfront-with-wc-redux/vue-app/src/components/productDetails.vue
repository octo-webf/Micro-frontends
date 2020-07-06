<template>
  <div>
    <h2>{{ product.name }}</h2>
    <h1>{{ product.price }}</h1>
  </div>
</template>

<script>
export default {
  name: "productDetails",
  props: ["product"],
};
</script>
