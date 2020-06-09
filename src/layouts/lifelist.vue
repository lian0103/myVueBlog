<template>
  <div class="page">
    <p class="titleTag">
      標籤：
      <span v-for="tag in tagsArr" :key="tag.id" v-html="tag.Icon+tag.name" @click="()=>{handleFilter(tag.name)}"></span>
    </p>
    <ul>
      <li v-for="(item,index) in notelist" :key="item.id">
        <router-link :to="item.url">
          <div class="imgBox">
            <img :src="item.img" alt />
          </div>
          <div class="txtBox">
            <br/>
            <h2>{{item.title}}</h2>
            <strong class="stime">{{item.cratetime}}</strong><br/>
            <span v-for="tag in rowTagMappingArr[index]" :key="tag.id">
              <strong v-html="tag.Icon"></strong>
            </span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import notelist from "../modelData/life.js";
var notes = notelist.rowdata.reverse();
var tagsArr = notelist.tags;
var rowTagMappingArr = [];

for (var i = 0; i < notes.length; i++) {
  var tempArr = [];
  for (var j = 0; j < notes[i].tags.length; j++) {
    var obj = {};
    for (var k = 0; k < tagsArr.length; k++) {
      if (tagsArr[k].name == notes[i].tags[j]) {
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
      notelist: notes,
      rowTagMappingArr: rowTagMappingArr,
      tagsArr: tagsArr,
      isMobile: window.innerWidth < 768 ? true : false
    };
  },
  methods: {
    handleFilter(name){
      let newData = [] ;

      notes.forEach( item => {
        item.tags.forEach( tag => {
          if(tag === name){
            newData.push(item);
          }
        })
      });
      
      this.notelist = newData;

    },
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

<style lang="scss" scoped>
.page {
  width: 100%;
  text-align: left;
  padding: 0.75rem;
}
.titleTag {
  width: 80%;
  margin-left: 2rem;
  padding: 20px 0;
  text-align: left;
  font-size: 1rem;
  cursor: pointer;
}
.titleTag span {
  margin-right: 20px;
}
.imgIcon {
  display: inline-block;
  max-width: 75px;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
}

.page ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.page li {
  flex: 0 0 30%;
  margin: 15px auto;
  text-align: left;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: flex-start;
}

.page li a {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.page li .imgBox {
  max-height: 200px;
  display: inline;
  vertical-align: text-bottom;
  padding: 0 10px;
  overflow: hidden;
  img {
    min-height: 200px;
    width: 100%;
  }
}

.page {
  .txtBox {
    line-height: 1.5;
    h2 {
      font-weight: 600;
      word-wrap: break-word;
    }
  }
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
  .titleTag {
    width: 100%;
    margin: 0;
    line-height: 1.6;
    padding: 10px 0;
    font-size: 1.1rem;
  }

  .page {
    font-size: 1rem;
    ul {
      flex-direction: column;
    }
    .txtBox {
      h2 {
        font-size: 1.5rem;
        font-weight: 600;
      }
      strong{
        font-weight: 300;
        font-size: 1.2rem;
        margin-right: 1rem;
      }
    }
  }

  .page li {
    width: 100%;
    margin: unset;
    margin-top: 25px;
    padding: 0.75rem 0;
  }
  .flexbox {
    display: flex;
    /* justify-content: flex-start;
    align-items: center; */
  }
  .flexbox strong {
    width: 50px;
    min-width: 50px;
  }
  .flexbox img {
    flex-grow: 2;
  }

  .flexbox span {
    flex-grow: 2;
    line-height: 1.3rem;
  }
}
</style>