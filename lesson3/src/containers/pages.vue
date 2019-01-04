<template>
  <!-- <button @click="login">点击登陆</button> --> 
  <div class="boxs">
    <!-- <div class="header">
      <b><</b>
      <span>补换驾照</span>
      <b>···</b>
    </div> -->
    <div class="main">
      <div class="topnav">
        <!-- <img src="./images/1_02.jpg" alt=""> -->
          <span>订单提交</span>
          <span>填写收货地址</span>
          <span>正在办理</span>
          <span>办理完成</span>
      </div>
      <img src="../images/2_02.jpg" alt="">
      <!-- <ul class="upload">
        <li>
          <div class="picbox">
            <b>+</b>
          </div>
          <span>身份证正面</span>
        </li>
        <li>
          <div class="picbox">
            <b>+</b>
          </div>
          <span>身份证正面</span>
        </li>
        <li>
          <div class="picbox">
            <b>+</b>
          </div>
          <span>身份证正面</span>
        </li>
        <li>
          <div class="picbox">
            <b>+</b>
          </div>
          <span>身份证正面</span>
        </li>
        <li>
          <div class="picbox">
            <b>+</b>
          </div>
          <span>身份证正面</span>
        </li>
      </ul> -->
      <Upload/>
      
      <div class="list">
        <div class="filters">
          <span>服务类型</span>
          <span @click="hjzClick">{{clickVal}}</span>
        </div>
        <van-popup v-model="popupShow" position="bottom">
          <van-picker :columns="columns" @cancel="cancel" @confirm="confirm" show-toolbar />
        </van-popup>
        <!-- <van-picker :columns="columns" @confirm="confirm" confirm-button-text cancel-button-text /> -->
        <!-- <li>
          <span>当前驾照签发城市<b class="icons">?</b></span>
          <b>请选择签发地</b>
        </li> -->
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
    </div>
    <div class="footer">
      <span>实付：<b>￥399</b></span>
      <span class="pay">立即支付</span>
    </div>
  </div>
</template>

<script>
import Upload from '../components/upLoad'
import CityPicker from '../components/city'
// const JSBridge = require('./utils/JSBridge.js');
export default {
  name: 'pages',
  data() {
    return {
      columns: ['换驾照', '补驾照'],
      popupShow:false,
      clickVal:'换驾照'
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
    }
  },
  // mounted(){
  //   fetch('/api/ExchangeJiaZhao/cityList',{
  //      method: "GET", // 请求的方法POST/GET等
  //       headers : { // 请求头（可以是Headers对象，也可是JSON对象）
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json'
  //       }
  //   })
  // },
  components:{
      Upload,
      CityPicker
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
