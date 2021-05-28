<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import eventBus from "@/components/communication/brother/event-bus";
export default {
  name: "List",
  props:{
    list:Array
  },
  methods:{
    handleAddTitle(title){
      console.log('title',title)
    }
  },
  mounted() {
    eventBus.$on('addItem',this.handleAddTitle)
  },
  beforeDestroy() {
    // 解绑，避免潜在的内存泄漏
    eventBus.$on('addItem',this.handleAddTitle)
  }
}
</script>

<style scoped>

</style>