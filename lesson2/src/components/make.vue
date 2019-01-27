<template>
    <div class="make">
        <img class="leftzs" src="../assets/装饰左@2x.png" alt="">
        <img class="rightzs" src="../assets/装饰右@2x.png" alt="">
        <img class="people" src="../assets/logo@2x.png" alt="">
        <b class="tit"><span>谎言从这里开始</span><br><span>step 1：选择一句最适合你的谎话</span></b>
        <div class="page1"><span>1</span><span>每天吃饭绝不重样，饿了就点美团外卖</span></div>
        <div class="page2"><span>2</span><span>下班回家亲自下厨，周一红烧牛肉，周二老坛酸菜</span></div>
        <div class="page3"><span>3</span><span>知道熬夜伤身，所以我只通宵</span></div>
        <span class="hbtn">换一换</span>
        <div class="input">
            <input type="text" placeholder="也可以在这里写下你的今日谎(zhuang)言(tai)">
            <span>发送</span>
        </div>
        <p class="hyh">
            <span>下一步</span>
            <img src="../assets/白色箭头右@2x.png" alt="">
        </p>
        <div class="zfx"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #app{
        width: 100%;
        height: 100%;
        background: url('../assets/background@2x.png') no-repeat;
        background-size: cover;
    }
    .make{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .make .leftzs{
        width: 38px;
        height: 38px;
        position: absolute;
        top: 15px;
        left: 15px;
    }
    .make .rightzs{
        width: 38px;
        height: 38px;
        position: absolute;
        top: 15px;
        right: 15px;
    }
    .make .people{
        width: 50px;
        height: 56px;
        position: absolute;
        top: 25px;
        left: 25px;
    }
    .make .tit{
        text-align: right;
        position: absolute;
        top: 30px;
        right: 26px;
        font-weight: 700;
    }
    .make .tit span{
        font-family: AliHYAiHei;
        font-size: 30px;
        color: #FED59E;
        text-align: right;
    }
    .make .tit span:last-child{
        font-size: 18px;
    }
    .page1{
        position: absolute;
        top: 180px;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #FFFFFF;
        width: 80%;
        margin-left: 10%;
    }
    .page1 span:first-child{
        font-family: AliHYAiHei;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;

    }
    .page1 span:last-child{
        margin-left: 4px;
    }
    .page2{
        position: absolute;
        top: 280px;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #FFFFFF;
        width: 80%;
        margin-left: 10%;
    }
    .page2 span:first-child{
        font-family: AliHYAiHei;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;

    }
    .page2 span:last-child{
        margin-left: 4px;
    }
    .page3{
        position: absolute;
        top: 380px;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #FFFFFF;
        width: 80%;
        margin-left: 10%;
    }
    .page3 span:first-child{
        font-family: AliHYAiHei;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;

    }
    .page3 span:last-child{
        margin-left: 4px;
    }
    .hbtn{
        width: 130px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        border: 1px solid #FFFFFF;
        border-radius: 2px;
        position: absolute;
        top: 450px;
        left: 50%;
        margin-left: -65px;
    }
    .input{
        position: absolute;
        top: 520px;
        left: 50%;
        margin-left: -165px;
    }
    .input input{
        border: 1px solid #FFFFFF;
        border-radius: 2px 0px 0px 2px;
        font-size: 10px;
        width: 260px;
        height: 30px;
        background: none;
        padding-left: 6px;
    }
    .input input::-webkit-input-placeholder{
        color: #fff;
    }
    .input span{
        display: inline-block;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #FB3359;
        text-align: center;
        width: 70px;
        height: 32px;
        background: #fff;
        margin-left: -5px;
    }
    .hyh{
        position: absolute;
        top: 600px;
        right: 15px;
    }
    .hyh span{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #FFFFFF;
        text-align: center;
    }
    .hyh img{
        width: 15px;
        height: 15px;
    }
    .zfx{
        width: 40%;
        height: 40vw;
        background: #fff;
    }
</style>
