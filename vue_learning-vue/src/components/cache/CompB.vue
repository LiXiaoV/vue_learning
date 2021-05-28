<template>
  <div>
    组件B
  </div>
</template>

<script>
export default {
  name: "CompB",
  mounted() {
    console.log("组件B渲染")
  },
  destroyed() {
    console.log("组件B销毁")
  }
}
</script>

<style scoped>

</style>