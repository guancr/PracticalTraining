<template>
    <ul>
        <li @click="cityListClick">
            <span>当前驾照签发城市<b class="icons">?</b></span>
            <!-- <b class="citynone">请选择补换地</b> -->
            <b>{{city.join('')}}</b>
        </li>
        <li @click="costListClick">
            <span>可补换的签发城市<b class="icons">?</b></span>
            <b>请选择补换地</b>
        </li>
        <van-popup v-model="showCity" position="bottom">
          <van-picker :columns="cityColumns" @change="cityChange" title="选择签发城市" @cancel="cityCancel" @confirm="cityConfirm" ref='cityPicker' show-toolbar />
        </van-popup>
    </ul>
</template>

<script>
import { mapState,mapMutations, mapActions } from "vuex";
export default {
  name: "CityPicker",
  data(){
      return {
        showCity: false,
        showCost: false,
        cityColumns:[]
      }
  },
  beforeCreate() {},
  created() {
    this.getCityList().then(res=>{
        this.cityColumns=[{
                values: this.cityList.map(item=>item.name)
            },{
                values: this.cityList[0].list.map(item=>item.name)
            }]
    })
  },
  computed:{
      ...mapState({
          cityList:state=>state.cityPicker.cityList,
          city:state=>state.cityPicker.city
      })
  },
  methods: {
    ...mapActions({
      getCityList: "cityPicker/getCityList"
    }),
    ...mapMutations({
      updateState: "cityPicker/updateState"
    }),
    cityListClick(){
        this.showCity = true;
    },
    costListClick(){
        this.showCost = true;
    },
    cityChange(picker,values){
        let index = this.cityList.findIndex(item=>item.name==values[0]);
        // this.cityColumns[1] = {
        //     values:this.cityList[index].list.map(item=>item.name)
        // }
        this.$refs.cityPicker.setColumnValues(1,this.cityList[index].list.map(item=>item.name))    
    },
    cityCancel(){
        this.showCity = false;
    },
    cityConfirm(values){
        this.updateState({city:values})
        this.showCity = false;
    }
  }
};
</script>

<style lang="scss" scoped>
ul{
    width: 100%;
    background: #fff;
    li{
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
</style>
