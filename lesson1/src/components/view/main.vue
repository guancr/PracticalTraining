<template>
  <div id="main">
      <div class="top">
          <router-link to="gxtj" class="line">个性推荐</router-link>
          <router-link to="zbdt">主播电台</router-link>
      </div>

        <div class="img">
            <div class="imgcol">
                <img src="../../images/lb1_15.jpg" alt="">
            </div>
        </div>
      <div class="nav">
          <ul>
            <li>
                <span><img src="../../images/nav1_19.jpg" alt=""></span>
                <p>私人FM</p>
            </li>
            <li>
                <span><img src="../../images/nav1_19.jpg" alt=""></span>
                <p>每日推荐</p>
            </li>
            <li>
                <span><img src="../../images/nav1_19.jpg" alt=""></span>
                <p>歌单</p>
            </li>
            <li>
                <span><img src="../../images/nav1_19.jpg" alt=""></span>
                <p>排行榜</p>
            </li>
          </ul>
      </div>
          <h4 class="h4">推荐歌单 ></h4>
      <div class="list">
          <dl>
              <dt><img src="../../images/list1_03.jpg" alt=""></dt>
              <dd>要做什么梦是每个人的自由</dd>
          </dl>
          <dl>
              <dt><img src="../../images/list1_03.jpg" alt=""></dt>
              <dd>要做什么梦是每个人的自由</dd>
          </dl>
          <dl>
              <dt><img src="../../images/list1_03.jpg" alt=""></dt>
              <dd>要做什么梦是每个人的自由</dd>
          </dl>
          <dl>
              <dt><img src="../../images/list1_03.jpg" alt=""></dt>
              <dd>要做什么梦是每个人的自由</dd>
          </dl>
          <dl>
              <dt><img src="../../images/list1_03.jpg" alt=""></dt>
              <dd>要做什么梦是每个人的自由</dd>
          </dl>
          <dl>
              <dt><img src="../../images/list1_03.jpg" alt=""></dt>
              <dd>要做什么梦是每个人的自由</dd>
          </dl>
          <dl>
              <dt><img src="../../images/list1_03.jpg" alt=""></dt>
              <dd>要做什么梦是每个人的自由</dd>
          </dl>
          <dl>
              <dt><img src="../../images/list1_03.jpg" alt=""></dt>
              <dd>要做什么梦是每个人的自由</dd>
          </dl>
      </div>
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style>
#main {
  flex: 1;
  height: 100%;
  overflow: auto;
}
.top {
  height:36px;
  background: #363b3e;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  padding-top: 2px;
}
.top a{
  color: #fdfffe;
  font-weight: 600;
  text-decoration: none;
}
.img{
    width: 100%;
    height: 100px;
    background: #363b3e;
}
.img .imgcol{
  width: 95%;
  height: 130px;
  background: #ccc;
  box-sizing: border-box;
  /* position: fixed;
  top: 80px; */
  border-radius: 5px;
  margin-left: 8px;
}
.img .imgcol img{
    width: 100%;
}
.nav{
    margin-top: 40px;
}
.nav ul{
    display: flex;
    justify-content: space-around;
}
.nav ul li{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 25%;
}
.nav ul li img{
    width: 46px;
    padding: 6px;
}
.nav ul li p{
    font-size: 12px;
    height: 16px;
    line-height: 16px;
}
.list{
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
}
.h4{
    height: 30px;
    line-height: 30px;

}
.list{
    margin-bottom: 20px;
}
.list dl{
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px 0;

}
.list dl dt{
    width: 100px;
    height: 100px;
    background: #f90;
    border-radius: 10px;
}
.list dl dt img{
    width: 100%;
}
.list dl dd{
    padding-top: 4px;
    width: 100px;
    font-size: 12px;
    line-height: 1.5;
}

</style>
