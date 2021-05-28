<template>
  <div class="watch">
    <label>
      <input type="text" v-model="name"/>
    </label>
    <p>{{ name }}</p>
    <label>
      <input type="text" v-model="info.hobby"/>
    </label>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  name: "Index3",
  data() {
    return {
      name: 'xiaov',
      info: {
        hobby: 'basketball'
      }
    }
  },
  watch:{
    name(newValue,oldValue){
      console.log('name',newValue,oldValue);
    },
    // 对象是引用值，拿不到旧值
    info:{
      handler:function (newValue,oldValue){
        console.log('info',newValue,oldValue);
      },
      // 深度监听
      deep: true
    }
  }
}
</script>

<style scoped>

</style>