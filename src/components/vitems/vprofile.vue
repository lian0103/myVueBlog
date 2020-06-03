<template>
  <div class="profile">
    <h2>
      <span></span>
      <span>about</span>
      <span></span>
    </h2>
    <div class="imgsAndTxt">
      <div class="imgs">
        <img id="headImg" src alt />
      </div>
      <div class="txt">
        <p>
          2019年資策會前端班結訓
          現為前端工程師。
          寫程式是為了生活 也是一種樂趣
          工作語言接觸 javascritp 和 java
          框架學習目前Vue為主
          -2019-12-8
        </p>
      </div>
    </div>
    <h3>最新消息</h3>
    <div class="newsBox">
      <ul id="nt-title">
        <li>
          <span onclick="openQAModel('1')">本身在銀行信用有瑕疵可以辦理嗎？</span>
        </li>
        <li>
          <span onclick="openQAModel('2')">有車子可是想借錢，要向誰借呢？</span>
        </li>
        <li>
          <span onclick="openQAModel('3')">申請貸款人需要有什麼條件呢？</span>
        </li>
        <li>
          <span onclick="openQAModel('4')">汽車貸款有什麼優點？</span>
        </li>
        <li>
          <span onclick="openQAModel('5')">借二胎房貸，需要提供什麼資訊？</span>
        </li>
        <li>
          <span onclick="openQAModel('6')">什麼狀況會需要申辦信用貸款?</span>
        </li>
      </ul>
    </div>
    <div class="serviceBox">
      <h3 class="typewrite" data-period="3500" data-type="[ '3大服務','快速審核' ]"></h3>
      <div class="info mt-2 d-flex">
        <span>信用借貸</span>
        <span>汽車借貸</span>
        <span>資金周轉</span>
      </div>
      <div class="infotxt">
        實際貸款條件，仍以銀行提供之產品為準，且每一顧客實際之年百分率仍以其個別貸款產品及授信條件而有所不同。
        歡迎聯繫我們專業的服務團隊來為您解答。
      </div>
    </div>
  </div>
</template>
<script>
// import imgs from "../../modelData/aboutMeImgs";
// import $ from "jquery";

export default {
  name: "vprofile",
  data() {
    return {};
  }
};
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
    display: flex;
    justify-content: flex-start;
    .imgs {
      flex: 2 0 unset;
      padding: 0rem;
      overflow: hidden;
      img {
        padding: 0rem 2rem;
        max-width: 400px;
        margin: auto;
      }
    }
    .txt {
      flex: 1 0 30%;
      text-align: left;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.3);
      p {
        padding: 4px 0;
        line-height: 1.7;
      }
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
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