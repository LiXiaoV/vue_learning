<template>
  <div>
    <button @click="state = 'A'">A</button>
    <button @click="state = 'B'">B</button>
    <button @click="state = 'C'">C</button>

    <keep-alive>
      <comp-a v-if="state === 'A'"></comp-a>
      <comp-b v-if="state === 'B'"></comp-b>
      <comp-c v-if="state === 'C'"></comp-c>
    </keep-alive>

  </div>
</template>

<script>
import CompA from "@/components/cache/CompA";
import CompB from "@/components/cache/CompB";
import CompC from "@/components/cache/CompC";
export default {
  name: "Index17",
  components:{
    "comp-a":CompA,
    'comp-b':CompB,
    "comp-c":CompC
  },
  data(){
    return {
      state:'A',
    }
  }
}
</script>

<style scoped>

</style>