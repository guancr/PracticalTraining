import { Vue, Component } from 'vue-property-decorator'

import NewsList from '@/components/NewsList/index.vue'

import {mapState, mapActions} from 'vuex'

const debug = require('debug')('log:Index')


// 必须使用装饰器的方式来指定component
@Component({
  components: {
    NewsList
  },
  computed: {
    ...mapState({
      channels: state=>state['index'].channels,
      newsList: state=>state['index'].newsList
    })
  },
  methods: {
    ...mapActions({
      getSetting: 'index/getSetting',
      getFeed: 'index/getFeed'
    })
  }
})
// @connect
class Index extends Vue {
  ver: number = 123
  current: number = 0
  isRefresh: boolean = false

  onShow() { // 小程序 hook
    debug('onShow')
    this['getSetting']().then(()=>{
      let appUrl = this['channels'][0].appUrl;
      this['getFeed'](appUrl)
    });
  }

  // tab切换
  tabChange({target}){
    console.log('target...', target);
    this.current = target.key;
    // 获取当前tab的appUrl
    let appUrl = this['channels'][target.key].appUrl;
    this['getFeed'](appUrl)
  }

  // 上拉加载
  onReachBottom(){
    console.log(1111);
    this.isRefresh = true;
  }

  // 刷新当前新闻
  refreshPage(){
    this.isRefresh = true;
  }

  // 加载下一页
  loadData(){

  }
}

export default Index
