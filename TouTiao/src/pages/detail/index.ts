import { Vue, Component } from 'vue-property-decorator'
// 必须使用装饰器的方式来指定component
@Component({})
class Detail extends Vue {
  msg: string = 'detail'
  mounted() { // vue hook
  }
}

export default Detail
