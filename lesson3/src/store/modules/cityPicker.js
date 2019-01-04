import {cityList,costList} from '../../api/index'

const state = {
    //签发城市列表
    cityList:[],
    //可补换城市列表
    costList:[],
    //选择的签发城市
    city:[],
    //选择的签发城市
    cost:[]
}

const mutations = {
  updateState(state, action){
   //  state.list[payload.index].src = payload.src;
   state = Object.assign(state,action)
  }
}

const actions = {
    //获取签发城市列表
    async getCityList({commit}){
        let res = await cityList();
        res.data.forEach(item => {
            item.list.forEach(val=>{
                delete val.list;
            })
        });
        commit('updateState',{cityList:res.data})
        console.log(res)
    }
} 

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
  