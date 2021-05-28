<template>
<!--  v-if与v-show的区别：v-if DOM加载的时候直接不渲染；v-show是加一个内联样式：display:none-->
  <div>
    <h1>v-if</h1>
    <p v-if="data === 'a'">a(v-if)</p>
    <p v-else-if="data === 'b'">b(v-if)</p>
    <p v-else>other(v-if)</p>
    <hr>

    <h1>v-show</h1>
    <p v-show="data === 'a'">a(v-show)</p>
    <p v-show="data === 'b'">b(v-show)</p>
  </div>
</template>

<script>
export default {
  name: "Index5",
  data(){
    return {
      data: 'a',
    }
  }
}
</script>

<style scoped>

</style>