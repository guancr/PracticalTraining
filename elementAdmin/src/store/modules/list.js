import {getUserList} from '@/api/user'
// import { resolve } from 'upath';
// import { reject } from '../../../node_modules/@types/q';

const state = {
    list:[]
}

const mutations = {
    updateList(state,list){
        state.list = list;
    }
}

const actions = {
    //获取用户列表
    getUserList({commit},query){
        return new Promise((resolve,reject)=>{
            getUserList(query).then(res=>{
                console.log('res..',res)
                if(res.data.code==1){
                    commit('updateList',res.data.data.list);
                    resolve();
                }else{
                    reject(res.data.msg)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
