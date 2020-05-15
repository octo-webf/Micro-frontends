<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <h1>Message</h1>
      <HelloWorld v-bind:msg.sync="msg" v-on:message="receiveMessage(event)" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

const PARENT_APPLICATION_URL = "http://localhost:5000";
const callbackMessage = "Vue: I got the message!";

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

export function receiveMessage(event) {
  if (event.origin !== PARENT_APPLICATION_URL) {
    return;
  }
  msg = event.data.info;
  // Passing information back to the parent/wrapper app
  event.source.postMessage(
    { info: callbackMessage, callback: true },
    event.origin
  );
}

export default {
  name: "App",
  model: { event: "message" },
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: msg
    };
  },
  methods: {}
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
