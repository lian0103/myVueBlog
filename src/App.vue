<template>
  <div id="app">
    <vinfo></vinfo>
    <vcontainer></vcontainer>
  </div>
</template>

<script>
import vinfo from "./components/vinfo.vue";
import vcontainer from "./components/vcontainer.vue";

export default {
  data() {
    return {

    };
  },
  name: "app",
  components: {
    vinfo: vinfo,
    vcontainer: vcontainer
  }
};
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: .1em;
}
</style>
