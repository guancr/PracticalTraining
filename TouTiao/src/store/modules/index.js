import {getSetting, getFeed} from '@/data/index';

const state = {
  channels: [],
  newsList: [],
  hot_time: []
}

const mutations = {
  updateChannels(state, channels){
    state.channels = channels.filter(item=>{
      return !item.defaultNotShow
    });
  },
  updateNewsList(state, newsList){
    state.newsList = newsList;
    state.hot_time = newsList.map(item=>{
      return item.content.behot_time;
    }).sort()[0];
    console.log('hot_time...', state.hot_time)
  },
  // 删除新闻
  removeNews(state, id){
    // 找到下标
    let index = state.newsList.findIndex(item=>{
      return item.content.item_id == id;
    })
    state.newsList.splice(index,1);
  }
}

const actions = {
  async getSetting({commit}){
    let channels = await getSetting();
    console.log('channels', channels);
    commit('updateChannels', channels.channels[0]);
  },

  async getFeed({commit}, url){
    let news = await getFeed(url)
    news.data.forEach(item=>{
      // 格式化content
      item.content = JSON.parse(item.content)
    })
    commit('updateNewsList', news.data);
    console.log('news...', news);
  }
}

export default {
  namespaced: true,
  mutations,
  state,
  actions
}
