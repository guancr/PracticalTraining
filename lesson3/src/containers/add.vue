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
        </ul>
    </div>
</template>

<script>
export default {};
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
</style>
