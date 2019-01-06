<template>
  <!-- <div class="pages">
    <div class="top">
      <div class="header">
        <img src="https://www.chelun.com/static/dist/img/logo.png" alt="">
      </div>
      <img src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png" alt="">
    </div>
  </div> -->
   <div class="chelun-index">
     <img src="http://picture.eclicks.cn/g1/l/2018/04/17/2e324eb8e740788b_2633_960.png" alt="">
    <div class="header-pc">
      <div class="header-content">
        <a href="/" class="logo">
          <img src="https://www.chelun.com/static/dist/img/logo.png" alt>
        </a>
        <ul class="header-menu">
          <li class="menu-product">
            <a href="#">产品</a>
            <div class="product-list">
              <dl>
                <dt>
                  <img src="https://www.chelun.com/static/dist/img/index/product-1.png" alt>
                </dt>
                <dd>车轮</dd>
              </dl>
              <dl>
                <dt>
                  <img src="https://www.chelun.com/static/dist/img/index/product-2.png" alt>
                </dt>
                <dd>车轮驾考通</dd>
              </dl>
              <dl>
                <dt>
                  <img src="https://www.chelun.com/static/dist/img/index/product-3.png" alt>
                </dt>
                <dd>车轮社区</dd>
              </dl>
              <dl>
                <dt>
                  <img
                    src="https://www.chelun.com/static/dist/img/product/m-product-logo-13.png"
                    alt
                  >
                </dt>
                <dd>超级教练</dd>
              </dl>
              <dl>
                <dt>
                  <img
                    src="https://www.chelun.com/static/dist/img/product/product-logo-jiaxiao.png"
                    alt
                  >
                </dt>
                <dd>超级驾校</dd>
              </dl>
              <dl>
                <dt>
                  <img
                    src="https://www.chelun.com/static/dist/img/product/product-logo-diandong.png"
                    alt
                  >
                </dt>
                <dd>车轮电动</dd>
              </dl>
              <dl>
                <dt>
                  <img
                    src="https://www.chelun.com/static/dist/img/product/m-product-logo-13.png"
                    alt
                  >
                </dt>
                <dd>超级教练路考仪</dd>
              </dl>
              <dl>
                <dt>
                  <img src="https://www.chelun.com/static/dist/img/index/product-more.png" alt>
                </dt>
                <dd>更多产品</dd>
              </dl>
            </div>
          </li>
          <li>
            <a href="#">关于我们</a>
          </li>
          <li>
            <a href="#">大数据</a>
          </li>
          <li>
            <a href="#">新闻</a>
          </li>
          <li>
            <a href="#">招聘</a>
          </li>
          <li>
            <a href="#">商城</a>
          </li>
          <li class="user-entry">
            <span>登录/注册</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-h5">
      <a href="/" class="logo">
        <img src="https://www.chelun.com/static/dist/img/logo.png" alt>
      </a>
      <ul class="header-menu"></ul>
      <div class="menu-btn">
        <span class="menu-btn-1"></span>
        <span class="menu-btn-2"></span>
        <span class="menu-btn-3"></span>
      </div>
    </div>
    <div class="tap">
            <div class="taplist wraper">
                <ul>
                    <li>分析评论</li>
                    <li>趋势榜单</li>
                    <li>研究报告</li>
                </ul>
            </div>
        </div>
        <div class="section">
            <div class="con wraper">
                <div class="one">
                    <h3><i></i><span>SUV</span><em>TOP10</em></h3>
                    <div id="myChart" :style="{width: '750px', height: '400px'}"></div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data:['吉利博越','冠道','本田XR-V','哈弗H6','途观','全新途胜','本田CR-V','缤智','奔驰GLA级','汉兰达']
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Jan/18','Mar/18','May/18','Jul/18','Sep/18','Nov/18']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name:'吉利博越',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230]
              },
              {
                  name:'冠道',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330]
              },
              {
                  name:'本田XR-V',
                  type:'line',
                  stack: '总量',
                  data:[150, 232, 201, 154, 190, 330]
              },
              {
                  name:'哈弗H6',
                  type:'line',
                  stack: '总量',
                  data:[320, 332, 301, 334, 390, 330]
              },
              {
                  name:'全新途胜',
                  type:'line',
                  stack: '总量',
                  data:[820, 932, 901, 934, 1290, 1330]
              },
              {
                  name:'本田CR-V',
                  type:'line',
                  stack: '总量',
                  data:[200, 300, 400, 500, 600, 700]
              },
              {
                  name:'缤智',
                  type:'line',
                  stack: '总量',
                  data:[123, 444, 785, 456, 789, 700]
              },
              {
                  name:'奔驰GLA级',
                  type:'line',
                  stack: '总量',
                  data:[155, 489, 357, 753, 851, 951]
              },
              {
                  name:'汉兰达',
                  type:'line',
                  stack: '总量',
                  data:[555, 666, 888, 772, 687, 786]
              }
          ]
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /* .pages{
    width: 100%;
    height: 100%;
  }
  .top{
    width: 100%;
  }
  .pages img{
      width: 100%;
  }
  .header{
    position: absolute;
    top: 0;
    width: 100%;
  }
  .header img{
    width: 150px;
  } */
</style>
