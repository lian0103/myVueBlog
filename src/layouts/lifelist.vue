<template>
  <div class="page">
    <ul>
      <li v-for="item in lifelist" :key="item.id">
        <router-link :to="item.url">
          <strong>{{timeTrans(item.mIndex)}} {{item.year}}</strong>
          <img class="imgIcon" :src="item.img" alt />
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import lifelist from "../modelData/life.json";
export default {
  data() {
    return {
      lifelist: lifelist.rowdata
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
</style>