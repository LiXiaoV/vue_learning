<template>
  <h1>
    <slot :user="user">
      {{user.name}}
    </slot>
  </h1>
</template>

<script>
export default {
  name: "CurrentUser",
  data(){
    return {
      user:{
        name:'xiaov',
        age:20,
      }
    }
  }
}
</script>

<style scoped>

</style>