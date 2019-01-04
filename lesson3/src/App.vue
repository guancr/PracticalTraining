<template>
  <!-- <button @click="login">点击登陆</button> -->
  <router-view></router-view>
</template>

<script>
// const JSBridge = require('./utils/JSBridge.js');
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
  width: 100%;
}
</style>
