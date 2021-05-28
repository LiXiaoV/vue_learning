<template>
  <el-menu
      default-active="activePath"
      class="el-menu-vertical-demo"
      :router="flag"
  >
    <el-menu-item index="/index1">
      <span>插值、指令、动态属性、表达式、v-html</span>
    </el-menu-item>
    <el-menu-item index="/index2">
      <span slot="title">计算属性</span>
    </el-menu-item>
    <el-menu-item index="/index3">
      <span slot="title">watch监听器</span>
    </el-menu-item>
    <el-menu-item index="/index4">
      <span slot="title">动态绑定类名和样式</span>
    </el-menu-item>
    <el-menu-item index="/index5">
      <span slot="title">v-if 和 v-show的区别</span>
    </el-menu-item>
    <el-menu-item index="/index6">
      <span slot="title">v-for列表渲染</span>
    </el-menu-item>
    <el-menu-item index="/index7">
      <span slot="title">事件</span>
    </el-menu-item>
    <el-menu-item index="/index8">
      <span slot="title">父子组件通信方法 之 props、$emits</span>
    </el-menu-item>
    <el-menu-item index="/index9">
      <span slot="title">兄弟组件通信方法</span>
    </el-menu-item>
    <el-menu-item index="/index10">
      <span slot="title">父子组件生命周期执行顺序</span>
    </el-menu-item>
    <el-menu-item index="/index11">
      <span slot="title">nextTick</span>
    </el-menu-item>
    <el-menu-item index="/index12">
      <span slot="title">插槽</span>
    </el-menu-item>
    <el-menu-item index="/index13">
      <span slot="title">作用域插槽</span>
    </el-menu-item>
    <el-menu-item index="/index14">
      <span slot="title">具名插槽</span>
    </el-menu-item>
    <el-menu-item index="/index15">
      <span slot="title">动态组件</span>
    </el-menu-item>
    <el-menu-item index="/index16">
      <span slot="title">异步组件</span>
    </el-menu-item>
    <el-menu-item index="/index17">
      <span slot="title">keep-alive</span>
    </el-menu-item>
    <el-menu-item index="/index18">
      <span slot="title">使用 mixin 抽离组件公共逻辑</span>
    </el-menu-item>
    <el-menu-item index="/index19">
      <span slot="title">vue2与vue3生命周期区别</span>
    </el-menu-item>
    <el-menu-item index="/index20">
      <span slot="title">理解composition API - 优化代码组织</span>
    </el-menu-item>

  </el-menu>

</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      flag:true,
    }
  }
}
</script>

<style scoped>

</style>