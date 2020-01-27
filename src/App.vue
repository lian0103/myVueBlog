<template>
  <div id="app">
    <vinfo></vinfo>
    <div class="pagerow">
      <div class="navMenu">
        <vmenubox></vmenubox>
      </div>
      <div class="containerbox">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import vmenubox from "./components/vmenubox.vue";
import vinfo from "./components/vinfo";
import gsap from "../node_modules/gsap/dist/gsap.min.js";

export default {
  data() {
    return {};
  },
  name: "app",
  components: {
    vmenubox: vmenubox,
    vinfo: vinfo
  },
  mounted() {
    initGsap();
  }
};

function initGsap() {
  gsap
    .timeline()
    .from(".menu_info", { duration: 2, opacity: 0, scale: 0.3 })
    .from(".sec ul li", {
      duration: 2,
      opacity: 0,
      stagger: 0.3,
      xPercent: 100
    });
}
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.1em;
  overflow-x: hidden !important;
  background-image: linear-gradient(to bottom right, #002f4b8c, #dc432596);
}

.pagerow {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.containerbox {
  width: 100%;
  height: auto;
  /* overflow-y: scroll; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
}

@media only screen and (max-width: 767px) {
  #app {
    overflow: hidden;
  }

  html {
    font-size: 14px;
  }
}
</style>
