<template>
  <div>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>
 
<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  components: { VeLine },
  data () {
    return {
      chartData: {
        columns: ['date', 'PV'],
        rows: [
          { '日期': '1/1', 'PV': 1231 },
          { 'date': '01-02', 'PV': 1223 },
          { 'date': '01-03', 'PV': 2123 },
          { 'date': '01-04', 'PV': 4123 },
          { 'date': '01-05', 'PV': 3123 },
          { 'date': '01-06', 'PV': 7123 }
        ]
      }
    }
  },
  created(){
    fetch('http://123.206.55.50:15000/users/commit').then(res=>res.json()).then(body=>{
      let data = body[0].commit;
      data.forEach((item,index) => {
        let date = item.date;
        for(let i=1;i<=12;i++){
          item[`${i}月`] = body[i-1].commit[date-1] && body[i-1].commit[date-1].commit;
        }
        delete item.commit;
      });
      this.chartData = {
        columns:['date','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        rows:data
      }
    })
  }
}
</script> 