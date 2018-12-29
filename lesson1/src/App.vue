<template>
  <div id="App">
    <!-- <Header/>
    <Main/>
    <Footer/> -->
    <button @click="changeNum({payload:'+'})">+</button>
    <span>{{num}}</span>
    <span>{{data}}</span>
    <button @click="changeNum({payload:'-'})">-</button>

    <!-- <router-view/>
    <Footer/> -->
  </div>
</template>

<script>
// import Header from './components/header'
// import Main from './components/main'
import Footer from './components/footer'

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: 'App',
  components:{
    Footer
  },
  computed:{
    ...mapState({
      num:state=>state.app.num
    }),
    ...mapGetters({
      data:'app/data'
    })
  },
  mounted(){
    console.log(this.$store)
  },
  methods:{
    ...mapMutations({
      changeNum:'app/changeNum'
    }),
    ...mapActions({
      changeNumAsync:'app/changeNumAsync'
    }),
    changeNum(type){
      // this.$store.commit('changeNum',{payload:type})
      // this.$store.commit({
      //   type: 'app/changeNum',
      //   payload: type
      // })
      // this.$store.dispatch({
      //   type: 'app/changeNumAsync',
      //   payload: type
      // })
      this.changeNumAsync({payload: type})
      .then(res=>{
        console.log('操作完成了！');
      })
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
