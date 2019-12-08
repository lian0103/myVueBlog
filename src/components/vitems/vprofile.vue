<template>
  <div class="profile">
    <h2>about me</h2>
    <div class="imgtxt">
      <div class="imgbox">
        <img
          id="headImg"
          src="https://tva1.sinaimg.cn/large/006tNbRwgy1g9plx0452yj31400u04qq.jpg"
          alt
        />
      </div>
      <div class="imgtxtPbox">
        <p>文組轉職網頁前端工程師</p>
        <p>寫程式是為了生活 也是一種樂趣</p>
        <p>工作語言涉略 javascritp 和 java</p>
        <p>前端框架學習目前Vue為主</p>
        <p>-2019-12-8</p>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery"
export default {
  name: "vprofile",
  methods: {
    setImg: function() {}
  }
};
// var starttime = new Date().getSeconds();
var index = 0;
var imgList = [
  "https://tva1.sinaimg.cn/large/006tNbRwgy1g9plx0452yj31400u04qq.jpg",
  "https://tva1.sinaimg.cn/large/006tNbRwgy1g9phwmkwl3j30hs0dd77x.jpg",
  "https://tva1.sinaimg.cn/large/006tNbRwgy1g9pjf8k3kxj31400u04qq.jpg",
];
function changeImg() {
    index++;
    if (!(index <= imgList.length - 1)) {
      index = 0;
    }
    $('#headImg').attr("src", imgList[index]);
    setTimeout(changeImg,6000);
}
setTimeout(changeImg,2000);


</script>

<style scoped>
.profile {
  padding: 1.25rem;
}

.imgtxt {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgbox {
  margin: 20px;
  width: 50%;
  height: 320px;
  padding: 0.25rem;
  border-radius: 15px;
  overflow: hidden;
  flex-flow: 2;
  position: relative;
  right: 10%;
}

.imgbox img{
  border-radius: 15px;
}

.imgtxtPbox {
  text-align: left;
  padding: .75rem;
  background: #ccc;
  position: absolute;
  right: 20%;
  bottom: 20%;
}

.imgtxtPbox p {
  padding: 4px 0;
}

.imgtxtPbox p:last-child{
  text-align: right;
}

.profile h2 {
  font-size: 1.3rem;
  padding: 0px 0.5rem;
  text-align: left;
  border-left: 12px solid transparent;
  border-image: 12
    repeating-linear-gradient(
      -45deg,
      red 0,
      red 0.1em,
      transparent 0,
      transparent 0.2em,
      #58a 0,
      #58a 0.3em,
      transparent 0,
      transparent 0.4em
    );
  padding: 12px 0.5rem;
}

@media only screen and (max-width: 767px) {
  .imgtxt{
      flex-direction: column;
  }

  .imgbox {
    max-width: 320px;
    margin: 10px 0;
    height: unset;
  }
  .imgbox img {
    max-height: 200px;
  }
}
</style>