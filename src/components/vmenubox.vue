<template>
  <div class="menubox">
    <div class="menu_info">
      <!-- <vinfo></vinfo> -->
      <div class="sec">
        <ul>
          <li>
            <router-link to="/about">關於我</router-link>
          </li>
          <li>
            <router-link to="/notelist">前端開發筆記</router-link>
          </li>
          <li>
            <router-link to="/lifelist">生活分享</router-link>
          </li>
          <li>
            <router-link to="/vuePlugin">vue plugin</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
var isDeskMode = window.innerWidth < 768 ? false : true;

export default {
  name: "vmenubox",
  data() {
    return {
      isDeskMode: isDeskMode
    };
  },
  components: {
    // vinfo: vinfo
  }
};
</script>

<style>
.menubox {
  display: flex;
  width: 100%;
  padding: 0.75rem;
  filter: grayscale(50%);
  box-shadow: 2px 5px 5px #888888;
  background-color: white;
}

.menu_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 95%;
  margin: auto;
  background-color: white;
  opacity: 1;
}
.menu_title {
  padding: 0.75rem;
  font-family: IkeaSofa;
}

.sec ul{
  text-align: center;
}

.sec li {
  width: 24%;
  height: 2rem;
  line-height: 2rem;
  display: inline-block;
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

@media only screen and (max-width: 767px) {
  .sec li {
    font-size: .8rem;
    height: auto;
    line-height: 1.2;
  }
}

</style>