<template>
  <div class="menubox">
    <div class="menu_info">
      <vinfo></vinfo>
      <div class="sec">
        <ul>
          <li><a href="#about">關於我</a></li>
          <li><a href="#record">筆記列表</a></li>
          <li><a href="#msg">徵求學習夥伴</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import vinfo from "./vinfo.vue";
export default {
  name: "vmenubox",
  components: {
    vinfo: vinfo
  }
};
</script>

<style>
.menubox {
  display: flex;
  flex-direction: column;
  min-width: 250px;
  z-index: 2;
  /* position: fixed;
  left: 0;
  top: 0; */
  min-height: 100vh;

  padding: 0.75rem;
  background-image: url("../assets/img/sea.jpg");
  background-size: cover;
  filter: grayscale(50%);
  box-shadow: 10px 10px 5px #888888;
}

.menu_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 95%;
  min-height: 90vh;
  margin: auto;
  background-color: white;
  opacity: 1;
}
.menu_title {
  padding: 0.75rem;
  font-family: IkeaSofa;
}

.sec {
  flex-grow: 2;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sec li {
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
}
.sec li:hover {
  background-color: #888888;
}

.mainbox {
  display: flex;
  flex-direction: column;
}
</style>