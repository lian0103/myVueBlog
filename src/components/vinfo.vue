<template>
  <div class="vinfo shadow-inner flex justify-center">
    <div class="flex text-center">
      <img :src="catImg" alt="" class="h-16 w-16 rounded-full p-1">
      <p class="align-middle p-1 lh80">{{title}}</p>
    </div>
    <div class="infoMenu">
      <p class="p-1"><i class="far fa-compass"></i>by Jason Lien</p>
      <p class="p-1"><i class="far fa-envelope"></i>k1319900103@gmail.com</p>
    </div>
  </div>
</template>

<script>
import catImg from "../assets/img/cat.jpeg";
export default {
  data(){
    return{
      title:"My-blog",
      catImg:catImg
    }
  },
  name: "vinfo",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.vinfo {
  width: 100%;
  max-width: unset !important;
  height: 85px;
  flex-basis: 85px;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
}
.infoMenu{
  position: absolute;
  top: 25px;
  right: 20px;
  font-size: 1rem;
  color: #444;
  text-align: left;
}
.lh80{
  line-height: 80px;
}
</style>
