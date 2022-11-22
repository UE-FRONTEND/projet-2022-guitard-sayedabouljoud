<template>
  <div style="text-align: center; width: 400px;">
    <Stats/>
  </div>
</template>

<script>

import Stats from "@/composants/Stats";
export default {
  name: 'App',
  components: {Stats},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
