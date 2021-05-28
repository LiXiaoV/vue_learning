<template>
  <div>
    <label>
      <input type="text" v-model="title"/>
    </label>
    <button @click="add">添加</button>
  </div>
</template>

<script>
import eventBus from "@/components/communication/brother/event-bus";

export default {
  name: "Input",
  data(){
    return {
      title: ''
    }
  },
  methods:{
    add(){
      this.$emit('add',this.title)
      eventBus.$emit('addItem',this.title)
    }
  }
}
</script>

<style scoped>

</style>