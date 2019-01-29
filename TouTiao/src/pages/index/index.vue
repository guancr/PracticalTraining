<template>
  <div class="counter-wrap">
    <!-- 头部 -->
    <div class="header" style="padding:0 4px;">
      <i-icon type="search" size="20" color="#000"/>
      <div class="tabs">
        <i-tabs :current="current" scroll @change="tabChange" color="#f85151">
          <i-tab i-class="tab" v-for="(item, index) in channels" :key="index" :data-url="item.url" :title="item.name"></i-tab>
        </i-tabs>
      </div>
      <i-icon type="add" size="20" color="#000" style="padding-right:4px;" />
      <i-icon type="group" size="20" color="#000" />
    </div>
    <!-- 新闻列表 -->
    <news-list :list="newsList"></news-list>

    <p :class="{refresh:true, active:isRefresh}" @click="refreshPage">
       <img src="../../assets/refresh.png">
    </p>

  </div>
</template>

<!--必须指定为ts-->
<script lang="ts" src="./index.ts"></script>

<style lang="less" scoped>
  .counter-wrap{
    padding-top: 84rpx;
  }
  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 999;
    left: 0;
    box-sizing: border-box;
    border-bottom: 1rpx solid #eee;
    .tabs{
      flex: 1;
      overflow: scroll;
      flex-wrap: nowrap;
      flex-shrink: 0;
    }
  }
  .tab{
    font-size: 24rpx;
  }
  .refresh{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 50rpx;
    right: 20rpx;
    background: #fff;
    border-radius: 50%;
    padding: 15rpx;
    border: 1px solid #eee;
    box-shadow: 0 0 3px 1px #c0c0c0;
    img{
      width: 54rpx;
      height: 54rpx;
    }
  }
  .refresh.active{
    animation: rotateD 1s linear infinite;
  }
  @keyframes rotateD {
    0%{
      transform: rotate(0)
    }
    100%{
      transform: rotate(360deg)
    }
  }
</style>
