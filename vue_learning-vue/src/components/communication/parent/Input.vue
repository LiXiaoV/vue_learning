<template>
  <div>
    <label>
      <input type="text" v-model="title"/>
    </label>
    <button @click="add">添加</button>
  </div>
</template>

<script>
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
    }
  }
}
</script>

<style scoped>

</style>