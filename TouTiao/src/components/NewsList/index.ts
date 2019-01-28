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

  get hot_time(){
    return this.list.map(item=>{
      return item.content.behot_time
    })
  }

  mounted() {
     console.log('list...')
  }
}
export default List
