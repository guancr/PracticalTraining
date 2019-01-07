<template>
  <section class="container">
    <TopNav/>
    <ul>
      <li v-for="item in hotList">
        {{item.name}}
      </li>
    </ul>
  </section>
</template>

<script>
import TopNav from '~/components/TopNav.vue'

export default {
  components: {
    TopNav
  },
  data(){
    return {
      hotList:[{
        name:"孙燕姿",
        time:'18小时前',
        tit:"祝我挑剔又讨厌的妹妹生日快乐！爱你，愿你继续幸福快乐。"
      },{
        name:"孙燕姿",
        time:'18小时前',
        tit:"祝我挑剔又讨厌的妹妹生日快乐！爱你，愿你继续幸福快乐。"
      }]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

