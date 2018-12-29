<template>
  <div id="App">
    <!-- <Header/>
    <Main/>
    <Footer/> -->
    <!-- <button @click="changeNum('+')">+</button>
    <span>{{this.$store.state.app.num}}</span>
    <button @click="changeNum('-')">-</button> -->

    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// import Header from './components/header'
// import Main from './components/main'
import Footer from './components/footer'
export default {
  name: 'App',
  components:{
    Footer
  },
  mounted(){
    console.log(this.$store)
  },
  methods:{
    changeNum(type){
      this.$store.commit('changeNum',{payload:type})
    }
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
