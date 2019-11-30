<template>
  <div class="vcontainer">
    
  </div>
</template>

<script>
export default {
  name: "vcontainer",
  props: {
    msg: String
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
  background-color: rgba(247, 234, 205, 0.7);
}
</style>
