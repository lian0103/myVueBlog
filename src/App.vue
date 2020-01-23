<template>
  <div id="app">
    <vmenubox></vmenubox>
    <div class="mainbox">
      <vcontainer></vcontainer>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
import vcontainer from "./components/vcontainer.vue";
import vmenubox from "./components/vmenubox.vue";
import vfooter from "./components/vfooter.vue";
import gsap from "../node_modules/gsap/dist/gsap.min.js";
export default {
  data() {
    return {};
  },
  name: "app",
  components: {
    vcontainer: vcontainer,
    vmenubox: vmenubox,
    vfooter:vfooter
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
body {
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

@font-face {
  font-family: "IkeaSofa";
  src: url("./assets/font/IKEA-SOFA-SANS.otf");
}
.fontIkea {
  font-family: "IkeaSofa";
  font-size: 2rem !important;
}

div::-webkit-scrollbar {
  width: 5px;
}
div::-webkit-scrollbar-track {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  margin: 10px 0 5px 0;
}
div::-webkit-scrollbar-thumb {
  -webkit-border-radius: 4px;
  border-radius: 4px;
  background: rgb(219, 219, 219);
}

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
}

@media only screen and (max-width: 767px) {
  #app {
    overflow: hidden;
  }
}
</style>
