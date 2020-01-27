<template>
  <div class="page">
    <ul>
      <li v-for="item in notelist" :key="item.id">
        <router-link :to="item.url" class="flexbox">
          <strong>{{timeTrans(item.mIndex)}} {{item.year}}</strong>
          <img class="imgIcon" :src="item.img" alt />
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import notelist from "../modelData/note.json";

export default {
  data() {
    return {
      notelist: notelist.rowdata
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
.imgIcon {
  display: inline-block;
  max-width: 75px;
  padding: 10px;
  border-radius: 15px;
}
.page li{
  width: 50%;
  margin: auto;
  text-align: left;
}

@media only screen and (max-width: 768px) {
  .page {
    font-size: 1rem;
  }
  .page li {
    width: 100%;
    margin: unset;
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