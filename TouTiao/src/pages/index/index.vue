<template>
  <div class="counter-warp">
    <i-button>按钮</i-button>

    <i-button>{{name}}</i-button>

    <i-button v-for="(item, index) in channels" :key="index">{{item.name}}</i-button>
  </div>
</template>
<!--必须指定为ts-->

<script lang="ts" src="./index.ts"></script>
<!--// function name(target, name, description){
//   console.log('target...', target)
//   target.prototype.cname = 'A'
//   target.prototype.sayName = function(){
//     return this.cname;
//   }
// }

// @connect()
// @name
// class A{

// }

// export default {
//   computed: {
//     name(){
//       return (new A()).cname
//     }
//   },
//   mounted() {
//     let b = new A();
//     console.log('b....', b.cname);
//     console.log(b.sayName());
//   },
// }
// </script> -->


<style lang="less" scoped>
  @import "./index";

  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }

  .home {
    display: block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }

</style>
