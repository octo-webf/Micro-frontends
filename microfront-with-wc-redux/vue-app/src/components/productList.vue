<template>
  <div>
    <h2>Liste des produits</h2>
    <div class="productList">
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
      <previewProduct />
    </div>
  </div>
</template>

<script>
import previewProduct from "./previewProduct";
export default {
  name: "productList",
  components: {
    previewProduct,
  },
};
</script>

<style scoped>
.productList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
