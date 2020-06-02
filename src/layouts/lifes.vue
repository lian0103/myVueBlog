<template>
  <div class="page">
    <router-link class="btn_back" to="/lifelist">
      <i class="fas fa-long-arrow-alt-left"></i>回上層
    </router-link>
    <div class="imgbox">
      <div class="imgboxleft">
        <img class="pimg" :src="thisNote.img" alt />
      </div>
      <div class="imgboxright" v-if="thisNote.imgs.length != 0">
        <img v-for="item in thisNote.imgs" :src="item" :key="item" alt="">
      </div>
    </div>
    <div class="pbox">
      <div class="ptitle">{{thisNote.title}}</div>
      <div class="ptagicons">
        標籤：
        <span v-bind:key="icon.id" v-for="icon in thisIconTags" v-html="icon.Icon+icon.name"></span>
      </div>
      <div class="pcontent" v-html="thisNote.txt"></div>
      <div class="pills">
        <a target="_blank" :href="thisNote.relateLink" v-if="thisNote.relateLink!=''">#連結</a>
        <span>{{thisNote.cratetime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import notelist from "../modelData/life.js";

export default {
  data() {
    return {
      thisNote: {},
      thisName: "",
      thisIconTags: []
    };
  },
  created() {
    this.thisName = this.$route.params.name;
    notelist.rowdata.map(item => {
      if (item.enTitle == this.thisName) {
        this.thisNote = item;
      }
    });
    var tags = notelist.tags;
    this.thisNote.tags.map(icon => {
      for (var i = 0; i < tags.length; i++) {
        if (icon == tags[i].name) {
          this.thisIconTags.push(tags[i]);
        }
      }
    });
  }
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 25px;
}
.imgbox {
  display: flex;
  max-width: 60%;
  flex-direction: column;
}

.imgboxleft{
  flex-grow: 2;
  padding: 0 15px;
}

.imgboxright{
  display: flex;
}
.imgboxright img{
  padding: 15px;
  max-width: 50%;
  flex-grow: 2;
}

.pbox {
  padding: 0.75rem;
  width: 80%;
  margin: auto;
}
.ptitle {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 0;
}
.pcontent {
  line-height: 1.3rem;
  font-size: 0.85rem;
}
.ptagicons {
  font-size: 0.8rem;
  padding: 1rem 0;
}
.btn_back {
  width: 120px;
  text-align: center;
  padding: 0.25rem 0.1rem;
  color: #444;
  position: absolute;
  left: 0;
  top: -10px;
}
.pills {
  padding: 0.5rem 0;
}
.pills a,
.pills span {
  display: inline-block;
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
  margin: 0 0.5rem 0 0;
  font-weight: 600;
  border-radius: 25px;
  background-color: #edf2f7;
}
@media only screen and (max-width: 768px) {
  .btn_back {
    top: 0;
    left: -5%;
  }
  .imgbox {
    max-width: 90%;
  }
  .pbox {
    padding: 0.5rem;
    width: 95%;
    font-size: 1.4rem;
  }
  .ptitle {
    font-size: 1.4rem;
  }

  .ptagicons,
  .pcontent {
    font-size: 1.1rem;
    line-height: 1.7rem;
  }

  .imgboxright img{
    max-height: 200px;
  }
}
</style>