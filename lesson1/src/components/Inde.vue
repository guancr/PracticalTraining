<template>
  <div id="App">
    <Header/>
    <Main/>
    
    <!-- <button @click="changeNum('+')">+</button>
    <span>{{this.$store.state.app.num}}</span>
    <button @click="changeNum('-')">-</button> -->
  </div>
</template>

<script>
import Header from './view/header'
import Main from '../components/view/main'
import Footer from './footer'
export default {
  name: 'App',
  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
body,html{
  width: 100%;
  height: 100%;
}
#App{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
