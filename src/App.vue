<template>
  <div id="app" :style="{backgroundImage: 'url(' + headImg + ')' }">
    <vinfo></vinfo>
    <vcontainer></vcontainer>
  </div>
</template>

<script>
import vinfo from "./components/vinfo.vue";
import vcontainer from "./components/vcontainer.vue";
import headImg from "./assets/img/wrapper.jpg";

export default {
  data() {
    return {
      headImg: headImg
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
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
