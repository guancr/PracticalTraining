import { Vue, Component, Prop } from 'vue-property-decorator'
import {mapMutations} from 'vuex'

// 必须使用装饰器的方式来指定component
@Component({
  // props: ['list']
  methods: {
    ...mapMutations({
      removeNews: 'index/removeNews'
    })
  }
})
class List extends Vue {
  @Prop({
    type: Array,
    default: []
  }) list;

  // 跳转详情
  goDetail(url){
    let arr = url.split('/');
    wx.navigateTo({
      url: `/pages/detail/main?id=${arr[arr.length-2]}`
    })
  }
}
export default List
