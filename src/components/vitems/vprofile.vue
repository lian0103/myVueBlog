<template>
  <div class="profile">
    <h2>
      <span></span>
      <span>about me</span>
      <span></span>
    </h2>
    <div class="imgsAndTxt">
      <div class="imgs">
        <img id="headImg" src alt />
      </div>
      <div class="txt">
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
        &:last-child {
          text-align: right;
        }
      }
    }
  }

  h2 {
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