<template>
    <div class="add">
        <div class="topnav">
          <span>订单提交</span>
          <span>填写收货地址</span>
          <span>正在办理</span>
          <span>办理完成</span>
        </div>
        <p>收货地址</p>
        <ul>
            <li>
                <span>联系省市</span>
                <span></span>
            </li>
            <li>
                <span>详细地址</span>
                <input type="text">
            </li>
            <li>
                <span>联系电话</span>
                <input type="text" placeholder="请输入联系电话">
            </li>
            <li>
                <span>联系人</span>
                <input type="text" placeholder="请输入联系人">
            </li>
        </ul>
        <!-- <img src="../assets/ee-icon.png" alt="" @click="redClick">  -->
        <div class="img" @click="redClick">红包</div>
        <div class="ok">确认</div>
        <div class="redbag" v-show="redflag">
          <img src="../assets/coupon.png" alt="">
          <p>
            <span @click="xiong">残忍拒绝</span>
            <span @click="fxlq">分享领取</span>
          </p>
        </div>
        <div>
          <!-- accept设置为*号会在客户端上卡顿，最好用逗号连接 -->
          <input type="file" accept="image/png,image/jpg,image/jpeg,image/gif" @change="uploadFile">上传图片
        </div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
import {goShare, uploadBase64} from '../api/index';
export default {
  data(){
    return {
      redflag:false
    }
  },
  methods:{
    redClick(){
      this.redflag = !this.redflag;
    },
    xiong(){
      this.redflag = false;
    },
    fxlq(){
      this.redflag = false;
      //微信朋友圈
       window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
        type: 'photo',
        imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546917955&di=cf97f40ce6ed75f467a9538cf2425493&src=http://www.artsbj.com/uploadfile/2018/0116/20180116023310856.jpg'
        }
      //微信好友
      window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
        title:'分享个消息给你',
        desc:'收到了吗？',
        link:'https://baike.baidu.com/item/%E9%99%88%E4%BC%9F%E9%9C%86/3463936?fr=aladdin',
        imgUrl:'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=2b28232cf4faaf5190ee89eded3dff8b/cdbf6c81800a19d8590d0f0f3afa828ba61e46aa.jpg'
      }
      goShare();
    },
    uploadFile(e){
      console.log('file...', e.target.files[0].size);
      let file = e.target.files[0];
      // 先判断图片是否过大
      if (file.size > 30*1024){
        // 转成base64
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = res=>{
          console.log('res.result...', res.target.result);
          let img = new Image();
          img.src = res.target.result;
          img.onload = async ()=>{
            // 创建canvas进行压缩
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            // 第一种压缩，压缩画布大小
            context.drawImage(img, 0,0,img.width, img.height, 0,0, img.width, img.height);
            let base64 = canvas.toDataURL();
            let res = await uploadBase64(base64);
            console.log('res...', res);
            // 第二种压缩，压缩图片质量
            let base65 = canvas.toDataURL('image/jpeg', 0.1);
            let res2 = await uploadBase64(base65);
            console.log('res2...', res2);
          }
        }
      }
    }
  }
  
};
</script>

<style lang="scss">
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
      &:nth-child(2){
        color: #fff;
        background: #3aaffe;
      }
    }
  }
  .add{
    >p{
      width: 100%;
      height: 32px;
      line-height: 32px;
      background: #eee;
      color: #666;
      text-align: center;
      font-size: 12px;
    }
    ul{
      li{
        border-bottom: solid 2px #eee;
        margin: 0 10px;
        height: 46px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
          border: none;
          text-align: right;
        }
      }
    }
    >.img{
      width: 50px;
      border-radius: 50%;
      position: fixed;
      right: 10px;
      bottom: 100px;
    }
    .redbag{
      width: 240px;
      position: fixed;
      top: 30%;
      left: 18%;
      border: solid 1px #ccc;
      img{
        width: 100%;
        height: 260px;
      }
      p{
        width: 100%;
        height: 32px;
        line-height: 32px;
        background: #eee;
        color: #666;
        font-size: 12px;
        display: flex;
        justify-content: space-around;
        span{
          width: 50%;
          text-align: center;
        }
      }
    }
    .ok{
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background: #666;
      font-weight: 800;
      position: fixed;
      bottom: 0;
    }
  }
</style>
