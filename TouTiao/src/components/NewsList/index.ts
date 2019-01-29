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

  mounted() {
     console.log('list...')
  }

  listClick(){
    console.log(9)
  }
}
export default List
