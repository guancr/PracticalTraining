<template>
  <div id="footer">
      <ul>
          <router-link tag="li" to="Indexs">
              <span><img src="../images/btm_07.jpg" alt=""></span>
              <p>发现</p>
          </router-link>
          <router-link tag="li" to="Audio">
              <span><img src="../images/btm_07.jpg" alt=""></span>
              <p>发现</p>
          </router-link>
          <router-link tag="li" to="Indexs">
              <span><img src="../images/btm_07.jpg" alt=""></span>
              <p>发现</p>
          </router-link>
          <router-link tag="li" to="Indexs">
              <span><img src="../images/btm_07.jpg" alt=""></span>
              <p>发现</p>
          </router-link>
          <router-link tag="li" to="Indexs">
              <span><img src="../images/btm_07.jpg" alt=""></span>
              <p>发现</p>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
#footer{
    height: 50px;
    background: #eee;
    position:fixed;
    bottom:0;
    width: 100%;
}
    #footer ul{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    #footer ul li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #footer ul li span{
        margin-top: 6px;
    }
        #footer ul li span img{
            width: 20px;
        }
    #footer ul li p{
        font-size: 12px;
    }
</style>


