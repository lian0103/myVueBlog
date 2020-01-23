<template>
  <div class="footerMsg" id="msg">
    <hr />
    <div class="top">
      <p>持續前端技術的學習</p>
      <p>有興趣可以一起約討論 嘗試新技術</p>
      <p class="p-1">
        <i class="far fa-envelope"></i>k1319900103@gmail.com
      </p>
    </div>
    <div id="disqus_thread"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    (function() {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://jaosn-blog.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
};
</script>

<style>
.footerMsg {
  width: 100%;
  padding: 0.75rem;
  background-color: #fff;
}
.footerMsg .top {
  width: 50%;
  margin: auto;
  min-height: 100px;
}
.footerMsg .top p {
  padding: 0.5rem 0;
}
</style>