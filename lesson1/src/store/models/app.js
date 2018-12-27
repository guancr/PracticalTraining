
const state = {
    num:1000
}

const mutations = {
    changeNum(state,{payload}){
        state.num = payload=='+'?state.num+1:state.num-1;
    }
}

export default {
    state,
    mutations
}

