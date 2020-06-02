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

<style >
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

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

.page {
  width: 100%;
  text-align: left;
  padding: 0.75rem;
  padding-top: 1rem;
}
.imgIcon {
  display: inline-block;
  max-width: 75px;
  padding: 10px;
  border-radius: 15px;
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
