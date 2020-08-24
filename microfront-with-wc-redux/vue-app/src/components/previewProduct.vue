<template>
  <button
    :id="product.id"
    class="container"
    v-on:click="() => handleClick(product)"
  >
    <div class="img-container">
      <img :src="product.imgURL" />
    </div>
    <div class="details">
      <h3>{{ product.name }}</h3>
      <div class="flex">
        <p class="description">{{ product.category }}</p>
        <p class="description">{{ product.price }}</p>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: "previewProduct",
  props: ["product"],
  methods: {
    handleClick(product) {
      this.$emit("selectedProduct", product);
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid lightgray;
  width: 250px;
  height: 320px;
  box-shadow: 0 0 10px lightgray;
  border-radius: 5px;
  overflow: hidden;
  margin: 20px;
  cursor: pointer;
}
.container:hover {
  position: relative;
  top: -2px;
}
.container:active {
  position: relative;
  top: 0px;
}

.img-container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 270px;
}

img {
  max-width: 250px;
}

.details {
  margin: 5px;
}

h3,
p {
  margin: 0;
  text-align: left;
}

h3 {
  white-space: nowrap;
  text-overflow: ellipsis;
}

.description {
  font-size: 14px;
  color: gray;
}
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
