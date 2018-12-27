<template>
  <div id="header">
      <span><img src="../images/1.jpg" alt=""></span>
      <input type="text" placeholder="猜你喜欢 浮生">
      <span><img src="../images/3_06.jpg" alt=""></span>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
    #header{
        height: 44px;
        display: flex;
        width: 100%;
        align-items: center;
        background: #33383b;
        justify-content: space-between;
        padding: 0 10px;
        box-sizing: border-box;
    }
    #header span img{
        width: 18px;

    }
    #header input{
        width: 100%;
        text-align: center;
        height: 26px;
        border-radius: 13px;
        border: none;
        background: #5b6161;
        color:#a4a8a9;        
        margin: 0 12px;
    }
    ::-webkit-input-placeholder{
        color:#a4a8a9; 
    }
</style>
