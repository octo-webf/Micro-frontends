<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <h1>Message</h1>
      <HelloWorld :msg="msg" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
var msg = getQuery();

// Receive information via routing parameters
export function getQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("input");
  if (myParam !== null && myParam.length > 0) {
    return myParam;
  } else {
    return "Nothing yet";
  }
}

// Receive information via DOM events
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (event.origin !== "http://localhost:5000") {
    return;
  }
  msg = event.data;

  // Passing information back to the parent/wrapper app
  event.source.postMessage("Vue: I got the message!", event.origin);
  console.log(msg);
}

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: msg,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  color: #2c3e50;
  justify-content: center;
  height: 100vh;
}
img {
  height: 120px;
}
h1,
h2 {
  margin: 0;
  padding: 0;
}
</style>
