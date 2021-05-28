<template>
  <div>
    组件C
  </div>
</template>

<script>
export default {
  name: "CompC",
  mounted() {
    console.log("组件C渲染")
  },
  destroyed() {
    console.log("组件C销毁")
  }
}
</script>

<style scoped>

</style>