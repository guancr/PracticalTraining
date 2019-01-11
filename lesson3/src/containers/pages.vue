<template>
  <div class="boxs">
    <div class="main">
      <div class="topnav">
          <span>订单提交</span>
          <span>填写收货地址</span>
          <span>正在办理</span>
          <span>办理完成</span>
      </div>
      <img src="../images/2_02.jpg" alt="">
      <Upload/>    
      <div class="list">
        <div class="filters">
          <span>服务类型</span>
          <span @click="hjzClick">{{clickVal}}</span>
        </div>
        <van-popup v-model="popupShow" position="bottom">
          <van-picker :columns="columns" @cancel="cancel" @confirm="confirm" show-toolbar />
        </van-popup>
        <CityPicker/>        
        <div class="money">
          <span>服务费</span>
          <b class="price">￥399</b>
        </div>
      </div>
      <ul class="list">
        <li class="youh">
          <span>优惠</span>
          <b>登陆后查看优惠券</b>
        </li>
      </ul>
          <Kefu/>
    </div>
    <div class="footer">
      <span>实付：<b>￥399</b></span>
      <router-link to="/add" tag="span" class="pay" @click="click">立即支付</router-link>
    </div>
    <div class="hahaha">❤</div>
  </div>
</template>

<script>
import Upload from '../components/upLoad'
import CityPicker from '../components/city'
import Kefu from '../components/kefu'
import {isVip, goPay} from '../api/index';
export default {
  name: 'pages',
  data() {
    return {
      columns: ['换驾照', '补驾照'],
      popupShow:false,
      clickVal:'换驾照',
      form: {
        type: ''
      }
    };
  },
  methods: {
    confirm(value) {
      this.popupShow = false;
      this.clickVal = value;
    },
    cancel(){
      this.popupShow = false;
    },
    hjzClick(){
      this.popupShow = true;
    },
    click(){
      goPay();
    }
  },
  components:{
      Upload,
      CityPicker,
      Kefu
  },
  mounted(){
    isVip().then(res=>{
      console.log('isVip...', res);
    })
  }
}
</script>

<style lang="scss">

.boxs {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee;
}
.header{
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: #fff;
}
.main{
  width: 100%;
  height: 100%;
  overflow: auto;
  flex: 1;
  img{
    width: 100%;
  }
  .topnav{
    width: 100%;
    height: 50px;
    // background: url('./images/1_02.jpg') no-repeat 0 0;
    // background-size: 100%;
    background: #fff;
    display: flex;
    justify-content: space-around;
    span{
      width: 100%;
      height: 100%;
      color: #3aaffe;
      text-align: center;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:nth-child(1){
        color: #fff;
        background: #3aaffe;
      }
    }
  }
  .kefu{
    position: fixed;
    right: 10px;
    width: 50px;
    z-index: 99;
  }
  .list{
    width: 100%;
    border-top: solid 10px #eee;
    background: #fff;
    .filters,.money,.youh{
      display: flex;
      margin: 0 16px;
      justify-content: space-between;
      height: 50px;
      align-items: center;
      border-bottom: solid 1px #eee;
      span{
        .icons{
          width: 16px;
          height: 16px;
          background: #c0c0c0;
          line-height: 16px;
          text-align: center;
          display: inline-block;
          border-radius: 50%;
          color: #fff;
          font-size: 14px;
          margin-left: 6px;
        }
      }
      b{
        color: #cacaca;
        font-weight: 200;
      }
      .price{
        color: red;
      }
    }
  }
}
.footer{
  height: 50px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .pay{
    width: 100px;
    height: 100%;
    background: #999;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
   
  }
   span{
     padding-left: 16px;
      b{
        color: red;
      }
    }
}

// .main .topnav img{
//   width: 100%;
// }
</style>
