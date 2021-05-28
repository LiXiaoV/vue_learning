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
export default {
  name: "List",
  props:{
    list:Array
  },
  created() {
    console.log("child component created")
  },
  mounted() {
    console.log("child component mounted")
  },
  beforeUpdate() {
    console.log("child component before update")
  },
  updated() {
    console.log("child component updated")
  }
}
</script>

<style scoped>

</style>