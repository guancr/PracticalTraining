<template>
  <div class="topNav">
    <input class="search" type="text" placeholder="大家都在搜:池子退出吐槽大会">
    <ul class="navlist">
        <li><nuxt-link to="/" tag="span">关注</nuxt-link></li>
        <li><nuxt-link to="/hot" tag="span">热门</nuxt-link></li>
      <li>新鲜事</li>
      <li>附近</li>
      <li>搞笑</li>
      <li>情感</li>
      <li>明星</li>
      <li>社会</li>
      <li>数码</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.topNav{
  width: 100%;
  height:80px;
  border-bottom: solid 1px #ccc;
  .search{
    width: 350px;
    padding-left: 10px;
    margin-left: 10px;
    height: 32px;
    background: #eee;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
  }
  .navlist{
    // display: flex;
    // float: left;
    overflow-x: auto;
    width: 100%;
    height: 48px;
    line-height: 48px;
    li{
      padding: 0 10px;
      text-align: center;
      display: inline-block;
      a{
        
      }
    }
  }
}
</style>

