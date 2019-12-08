<template>
  <div class="vcontainer">
    <vprofile></vprofile>
    <carditem data-target="work"></carditem>
    <carditem data-target="life"></carditem>
  </div>
</template>

<script>
import carditem from "./vitems/carditem.vue";
import vprofile from "./vitems/vprofile.vue";
export default {
  name: "vcontainer",
  components: {
    carditem,
    vprofile
  }
};
</script>
<style scoped>
.vcontainer {
  width: 100%;
  height: 500px;
  margin: auto;
  max-width: 1200px;
  height: auto;
  flex-basis: 75vh;
  flex-grow: 1;
  flex-shrink: 0;
}
</style>
