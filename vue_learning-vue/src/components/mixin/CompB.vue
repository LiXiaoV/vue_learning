<template>
  <div>
    <p>{{bData}}</p>
    <p>{{commonData}}</p>
    <button @click="bMethod">bMethod</button>
    <button @click="commonMethod">commonMethod</button>
  </div>
</template>

<script>
import mixin from "@/components/mixin/mixin";
export default {
  name: "CompB",
  mixins:[mixin],
  data(){
    return {
      bData: "组件B的数据",
    }
  },
  methods:{
    bMethod(){
      console.log("运行组件B的方法")
    },
  },
  mounted() {
    console.log("组件B mounted");
  }
}
</script>

<style scoped>

</style>