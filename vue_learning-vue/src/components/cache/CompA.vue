<template>
  <div>
    组件A
  </div>
</template>

<script>
export default {
  name: "CompA",
  mounted() {
    console.log("组件A渲染")
  },
  destroyed() {
    console.log("组件A销毁")
  }
}
</script>

<style scoped>

</style>