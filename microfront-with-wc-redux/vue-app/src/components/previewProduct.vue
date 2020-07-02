<template>
  <div class="container">
    <div class="img-container">
      <img
        src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      />
    </div>
    <div class="details">
      <h3>Product name</h3>
      <h4>Category</h4>
    </div>
  </div>
</template>

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

.img-container {
  overflow: hidden;
  vertical-align: middle;
  height: 270px;
}

img {
  max-width: 250px;
}

.details {
  margin: 5px;
}

h3,
h4 {
  margin: 0;
}

h4 {
  font-size: 14px;
  color: gray;
}
</style>
