<template>
    <ul>
        <li @click="cityListClick">
            <span>当前驾照签发城市<b class="icons">?</b></span>
            <!-- <b class="citynone">请选择补换地</b> -->
            <b title="请选择补换地">{{city.join('')}}</b>
        </li>
        <li @click="costListClick">
            <span>可补换的签发城市<b class="icons">?</b></span>
            <b>{{cost.join('')}}</b>
        </li>
        <van-popup v-model="showCity" position="bottom">
          <van-picker :columns="cityColumns" @change="cityChange" title="选择签发城市" @cancel="cityCancel" @confirm="cityConfirm" ref='cityPicker' show-toolbar />
        </van-popup>
        <van-popup v-model="showCost" position="bottom">
          <van-picker :columns="costColumns" @change="costChange" title="请选择补换地" @cancel="costCancel" @confirm="costConfirm" ref='costPicker' show-toolbar />
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
        cityColumns:[],
        costColumns:[]
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
          costList:state=>state.cityPicker.costList,
          city:state=>state.cityPicker.city,
          cost:state=>state.cityPicker.cost
      })
  },
  methods: {
    ...mapActions({
      getCityList: "cityPicker/getCityList",
      getCostList: "cityPicker/getCostList"
    }),
    ...mapMutations({
      updateState: "cityPicker/updateState"
    }),
    cityListClick(){
        this.showCity = true;
    },
    costListClick(){
        // this.showCost = true;
        if(!this.city.length){
            alert('请选择签发城市');
        }else{
            this.showCost = true;
            this.getCostList().then(res=>{
                this.costColumns=[{
                        values: this.costList.map(item=>item.name)
                    },{
                        values: this.costList[0].list.map(item=>item.name)
                    }]
            })
        }
    },
    cityChange(picker,values){
        //获取当前省份下标
        let index = this.cityList.findIndex(item=>item.name==values[0]);
        //调用api更新城市
        this.$refs.cityPicker.setColumnValues(1,this.cityList[index].list.map(item=>item.name))    
    },
    costChange(picker,values){
        //获取当前省份下标
        let index = this.costList.findIndex(item=>item.name==values[0]);
        //调用api更新城市
        this.$refs.costPicker.setColumnValues(1,this.costList[index].list.map(item=>item.name)) 
    },
    cityCancel(){
        this.showCity = false;
    },
    costCancel(){
        this.showCost = false;
    },
    cityConfirm(values){
        this.updateState({city:values})
        this.showCity = false;
    },
    costConfirm(values){
        this.updateState({cost:values})
        this.showCost = false;
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
