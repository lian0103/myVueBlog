<template>
  <div class="carditem">
    <h2>{{cardtitle}}</h2>
    <div class="maincontent">
        <div class="first">
            <img src="" alt="">
            <h3>{{itemName}}</h3>
            <p v-if="itemTxt!=''">{{itemTxt}}</p>
            <a :href="itemLink" v-if="itemLink!=''">資源連結</a>
        </div>
        <div class="others">
            <ul>
                <li v-bind:key="item.id" v-for="item in worklist">{{item.name}}</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  name: "carditem"
};
</script>

<style scoped>
.carditem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.maincontent{
    display: flex;
}

.first{
    flex-basis: 50%;
    flex-grow: 1;
}
.others{
    flex-basis: 35%;
}
</style>
