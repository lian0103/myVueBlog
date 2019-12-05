<template>
  <div id="app">
    <vinfo></vinfo>
    <vcontainer></vcontainer>
  </div>
</template>

<script>
import vinfo from "./components/vinfo.vue";
import vcontainer from "./components/vcontainer.vue";
import gsap from "../node_modules/gsap/dist/gsap.min.js";
export default {
  data() {
    return {};
  },
  name: "app",
  components: {
    vinfo: vinfo,
    vcontainer: vcontainer
  },
  mounted() {
    initGsap();
  }
};

function initGsap() {
  gsap
    .timeline()
    .from(".carditem", { duration: 2, opacity: 0, scale: 0.3 })
    .from(".others ul li", {
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

@font-face {
  font-family: "IkeaSofa";
  src: url("./assets/font/IKEA-SOFA-SANS.otf");
}
.fontIkea{
  font-family: "IkeaSofa";
  font-size: 2rem !important;
}

div::-webkit-scrollbar {
width: 5px;
}
div::-webkit-scrollbar-track {
-webkit-border-radius: 10px;
border-radius: 10px;
margin:10px 0 5px 0;
}
div::-webkit-scrollbar-thumb {
-webkit-border-radius: 4px;
border-radius: 4px;
background: rgb(219,219,219);
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
