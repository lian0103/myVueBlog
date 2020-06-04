<template>
  <div class="profile">
    <h2>
      <span></span>
      <span>about</span>
      <span></span>
    </h2>
    <div class="imgsAndTxt">
      <div class="imgs">
        <img id="headImg" :src="headImg" alt />
        <img id="headImg" :src="headImg2" alt />
      </div>
      <div class="txt">
        <h3>keep it updated...</h3>
        <p v-html="myTxt"></p>
      </div>
    </div>

    <h2>
      <span></span>
      <span>作品介紹</span>
      <span></span>
    </h2>
  </div>
</template>
<script>
import content from "../modelData/content";
import imgs from "../modelData/aboutMeImgs";
// import $ from "jquery";

export default {
  name: "vprofile",
  data() {
    return {
      myTxt: content.txt,
      headImg: imgs[0],
      headImg2: imgs[2]
    };
  }
};
// setTimeout(()=>{
//   $("#headImg").attr("src",headImg);
// },1000)

// ~async function() {
// var index = 0;
// const delay = t => {
//   // 先撰寫一個等待的 function
//   return new Promise(resolve => {
//     setTimeout(resolve, t);
//   });
// };

// for (let i = 0; i < imgs.length; i++) {
//   let imgDom = $("#headImg");
//   imgDom.attr("src", imgs[index]);
//   index++;
//   await delay(4000);
//   if (index == imgs.length - 1) {
//     i =0 ;
//     index = 0;
//   }
// }
// }();
</script>

<style lang="scss" scoped>
$mainColor:#1e9d98;
$secondColor:rgb(204, 204, 102);
$mainColorOpacity:rgba(30, 157, 152,.3);
$secondColorOpacity:rgba(204, 204, 102,.3);

$fontColorWhite:#fff; 
$fontColorBlack:#323232;

$fontSizeSmall: 14px;
$fontSizeMedium: 16px;
$fontSizeTitle: 26px;

$grayBackGroung : #DBDFE6;
.profile {
  padding: 1.25rem;
  position: relative;

  .imgsAndTxt {
    margin: 0.75rem 0;
    padding-bottom: 1.5rem;
    display: flex;
    justify-content: flex-start;
    .imgs {
      flex: 0 0 360px;
      padding: 0rem;
      overflow: hidden;
      img {
        width: 100%;
        padding: 0rem 1.5rem;
        margin: auto;
      }
    }
    .txt {
      flex: 1 0 350px;
      text-align: left;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.3);
      p {
        padding: 0.5rem 0;
        line-height: 1.4;
      }
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    padding: 0px 0.5rem;
    text-align: left;
    font-weight: 600;
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
    padding: 12px 1rem;
  }
  .newsBox {
    display: inline-block ;
    margin-top: 0px;
    padding: 20px 20px 20px 20px;
    background-clip: padding-box;
    h3{
        text-align: left;
        padding-left: 1rem;
        font-size: 1.2rem;
        font-weight: 700;
        color: $fontColorBlack;
        padding: .25rem .75rem;
        background-color:$grayBackGroung;
    }
  }
}

@media only screen and (max-width: 768px) {
  .profile {
    padding: 0.5rem;
    .imgsAndTxt {
      flex-direction: column;
      .imgs {
        width: 95%;
        margin: 10px 0;
        height: auto;
        right: 0%;
        img {
          width: 100%;
        }
      }
      .txt {
        text-align: left;
        padding: 0.75rem;
        background: #ccc;
        position: relative;
        right: 0%;
        bottom: 40px;
        font-size: 1rem;
        width: 85%;
      }
    }

    h2 {
      border: none;
      border-image: none;
      text-align: center;
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      span:first-child,
      span:last-child {
        display: block;
        width: 25%;
        height: 0;
        border: 1px solid #444;
        margin: 0px 4px;
      }
    }
  }
}
</style>