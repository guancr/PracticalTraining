<template>
    <div class="spec">
        <img class="leftzs" src="../assets/装饰左@2x.png" alt="">
        <img class="rightzs" src="../assets/装饰右@2x.png" alt="">
        <img class="people" src="../assets/logo@2x.png" alt="">
        <b class="tit"><span>春节回家每日一谎</span><br><span>步骤</span></b>
        <div class="step1">
            <p>Step 1</p>
            <p><span>选择</span><span>贴心谎话</span></p>
        </div>
        <div class="step2">
            <p>Step 2</p>
            <p><span>选择</span><span>谎话背景图</span></p>
        </div>
        <div class="step3">
            <p>Step 3</p>
            <p><span>生成</span><span>谎话海报，领取免费春节“治”人攻略</span></p>
        </div>
        <router-link to="/make" class="btn">开始制作</router-link>
        <div class="ruls">活动规则：<br/>2月3日-2月7日，春节全程谎言陪伴，每天不再担心各种质问，同时天天都能有攻略（免费会员课程）领取哦！</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style>
    #app{
        width: 100%;
        height: 100%;
        background: url('../assets/background@2x.png') no-repeat;
        background-size: cover;
    }
    .spec{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .spec .leftzs{
        width: 38px;
        height: 38px;
        position: absolute;
        top: 15px;
        left: 15px;
    }
    .spec .rightzs{
        width: 38px;
        height: 38px;
        position: absolute;
        top: 15px;
        right: 15px;
    }
    .spec .people{
        width: 50px;
        height: 56px;
        position: absolute;
        top: 25px;
        left: 25px;
    }
    .spec .tit{
        text-align: right;
        position: absolute;
        top: 30px;
        right: 26px;
        font-weight: 700;
    }
    .spec .tit span{
        font-family: AliHYAiHei;
        font-size: 30px;
        color: #FED59E;
        text-align: right;
    }
    .spec .tit span:last-child{
        border-bottom: solid #FED59E 4px;
    }
    .spec .step1{
        position: absolute;
        left: 25px;
        top: 150px;
    }
    .spec .step2{
        position: absolute;
        left: 25px;
        top: 250px;
    }
    .spec .step3{
        position: absolute;
        left: 25px;
        top: 350px;
    }
    .spec .step1,.step2,.step3 p{
        font-family: AliHYAiHei;
        font-size: 18px;
        color: #FFFFFF;
        text-align: left;
        font-weight: 700;
    }
    .spec .step1,.step2,.step3 p>span{
        padding-top: 20px;
    }
    .spec .step1 p>span:first-child{
        border-bottom: solid 2px #fff;
    }
    .spec .step2 p>span:first-child{
        border-bottom: solid 2px #fff;
    }
    .spec .step3 p>span:first-child{
        border-bottom: solid 2px #fff;
    }
    .spec .btn{
        border: 2px solid #FFFFFF;
        border-radius: 12px;
        width: 130px;
        height: 33px;
        line-height: 33px;
        display: inline-block;
        text-align: center;
        font-size: 16px;
        color: #fff;
        position: absolute;
        top: 480px;
        left: 50%;
        margin-left: -65px;
    }
    .spec .ruls{
        width:80%;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        margin-left: 10%;
        position: absolute;
        top: 550px;
    }
</style>
