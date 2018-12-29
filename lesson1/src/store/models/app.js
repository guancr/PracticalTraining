//模块中的数据
const state = {
    num:1000
}

//派生的数据，会被缓存
const getters = {
    //格式化时间
    data(state){
        let data = new Date();
        let year = data.getFullYear(),
            mount = (data.getMonth()+1).toString().padStart(2,'0'),
            day = data.getDate().toString().padStart(2,'0'),
            hour = data.getHours().toString().padStart(2,'0'),
            min = data.getMinutes().toString().padStart(2,'0'),
            sec = data.getSeconds().toString().padStart(2,'0');
        return `${year}-${mount}-${day} ${hour}:${min}:${sec} ${state.num}`;
    }
}

//模块中同步的改变
const mutations = {
    changeNum(state,{payload}){
        // setTimeout(()=>{
        //     state.num = payload=='+'?state.num+1:state.num-1;
        // },1000)
        state.num = payload=='+'?state.num+1:state.num-1;
    }
}

//模块中的异步改变
const actions = {
    changeNumAsync({commit},action){
        // console.log(context,payload)
        setTimeout(()=>{
         commit('changeNum',action)
           
        },0)
    }
}

export default {
    //命名空间
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}

