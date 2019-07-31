<template>
  <div id="app">
    <router-view name="Nav"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p, body, div, ul, li, h1 {
  padding: 0;
  margin: 0;
}
</style>
