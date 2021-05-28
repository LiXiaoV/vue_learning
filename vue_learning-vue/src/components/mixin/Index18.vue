<template>
  <div>
    <comp-a></comp-a>
    <hr>
    <comp-b></comp-b>
  </div>
</template>

<script>
import CompA from "@/components/mixin/CompA";
import CompB from "@/components/mixin/CompB";
export default {
  name: "Index18",
  components:{
    "comp-a":CompA,
    'comp-b':CompB,
  }
}
</script>

<style scoped>

</style>