<template>
  <div class="page">
    <p class="titleTag">
      標籤：
      <span v-for="tag in tagsArr" :key="tag.id" v-html="tag.Icon+tag.name"></span>
    </p>
    <ul>
      <li v-for="(item,index) in lifelist" :key="item.id">
        <router-link :to="item.url" class="flexbox">
          <strong>{{timeTrans(item.mIndex)}} {{item.year}}</strong>
          <img class="imgIcon" :src="item.img" alt />
          <span>{{item.title}}</span>
          <span class="tags" v-for="tag in rowTagMappingArr[index]" :key="tag.id">
            <strong v-html="tag.Icon"></strong>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import lifelist from "../modelData/life.js";
var lifelistR = lifelist.rowdata.reverse();
var tagsArr = lifelist.tags;
var rowTagMappingArr = [];

for (var i = 0; i < lifelistR.length; i++) {
  var tempArr = [];
  for (var j = 0; j < lifelistR[i].tags.length; j++) {
    var obj = {};
    for (var k = 0; k < tagsArr.length; k++) {
      if (tagsArr[k].name == lifelistR[i].tags[j]) {
        obj = tagsArr[k];
      }
    }
    tempArr.push(obj);
  }
  rowTagMappingArr.push(tempArr);
}

export default {
  data() {
    return {
      lifelist: lifelistR,
      iconTags: lifelist.tags,
      rowTagMappingArr: rowTagMappingArr,
      tagsArr: tagsArr
    };
  },
  methods: {
    timeTrans: function(mIndex) {
      let month = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ];
      return month[mIndex];
    }
  }
};
</script>

<style>
.page {
  width: 100%;
  text-align: left;
  padding: 0.75rem;
}
.titleTag {
  width: 80%;
  margin: auto;
  padding: 20px 0;
  text-align: left;
  font-size: 0.8rem;
}
.titleTag span {
  margin-right: 20px;
}
.imgIcon {
  display: inline-block;
  max-width: 75px;
  padding: 10px;
  border-radius: 15px;
}
.tags i {
  position: relative;
  left: 20px;
  padding: 10px 0;
  font-size: 1.2rem;
}
.flexbox span {
  white-space: nowrap;
}
@media only screen and (max-width: 768px) {
  .page {
    font-size: 1rem;
  }
  .page li {
    margin-top: 25px;
  }
  .flexbox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .flexbox strong {
    width: 50px;
    min-width: 50px;
  }

  .flexbox span {
    flex-grow: 2;
    line-height: 1.3rem;
  }
}
</style>