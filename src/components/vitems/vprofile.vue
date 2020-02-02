<template>
  <div class="profile">
    <h2><span></span><span>about me</span><span></span></h2>
    <div class="imgtxt">
      <div class="imgbox">
        <img
          id="headImg"
          src="https://tva1.sinaimg.cn/large/006tNbRwgy1g9plx0452yj31400u04qq.jpg"
          alt
        />
      </div>
      <div class="imgtxtPbox">
        <p>2019年資策會前端班結訓</p>
        <p>現為前端工程師。</p>
        <p>寫程式是為了生活 也是一種樂趣</p>
        <p>工作語言接觸 javascritp 和 java</p>
        <p>框架學習目前Vue為主</p>
        <p>-2019-12-8</p>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
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
  "https://tva1.sinaimg.cn/large/006tNbRwgy1g9pjf8k3kxj31400u04qq.jpg"
];
function changeImg() {
  index++;
  if (!(index <= imgList.length - 1)) {
    index = 0;
  }
  $("#headImg").attr("src", imgList[index]);
  setTimeout(changeImg, 6000);
}
setTimeout(changeImg, 2000);
</script>

<style scoped>
.profile {
  padding: 1.25rem;
  position: relative;
}

.imgtxt {
  display: flex;
  flex-direction: column;
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

.imgbox img {
  border-radius: 15px;
}

.imgtxtPbox {
  text-align: left;
  padding: 0.75rem;
  background: #ccc;
  position: absolute;
  right: 10%;
  bottom: 5%;
}

.imgtxtPbox p {
  padding: 4px 0;
}

.imgtxtPbox p:last-child {
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

@media only screen and (max-width: 768px) {
  .profile {
    padding: 0.5rem;
  }

  .imgtxt {
    flex-direction: column;
  }

  .imgbox {
    width: 95%;
    margin: 10px 0;
    height: auto;
    right: 0%;
  }
  .imgbox img {
    width: 100%;
  }
  .imgtxtPbox {
    text-align: left;
    padding: 0.75rem;
    background: #ccc;
    position: relative;
    right: 0%;
    bottom: 40px;
    font-size: 1rem;
    width: 85%;
  }
  .profile h2 {
    border: none;
    border-image: none;
    text-align: center;
    width: 100%;
    position: relative;
  }
  .profile h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profile h2 span:first-child,
  .profile h2 span:last-child {
    display: block;
    width: 25%;
    height: 0;
    border: 1px solid #444;
    margin: 0px 4px;
    /* position: absolute;
    top: 50%;
    left: 0%; */
  }
}
</style>