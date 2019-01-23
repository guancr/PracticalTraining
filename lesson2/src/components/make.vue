<template>
    <div class="make">
        <img class="leftzs" src="../assets/装饰左@2x.png" alt="">
        <img class="rightzs" src="../assets/装饰右@2x.png" alt="">
        <img class="people" src="../assets/logo@2x.png" alt="">
        <b class="tit"><span>谎言从这里开始</span><br><span>step 1：选择一句最适合你的谎话</span></b>
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

</style>
