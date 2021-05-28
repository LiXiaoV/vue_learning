<template>
  <div>
    <p>{{ number }}</p>
<!--    计算属性：缓存：number变动时，double1才变动，其它不涉及double1计算的属性变动，double1的计算方法不执行-->
    <p> double1:{{ double1 }}</p>
    <label>
      <input v-model="double2"/>
    </label>
  </div>
</template>

<script>
export default {
  name: "Index2",
  data() {
    return {
      number: 5,
    }
  },
  computed: {
    double1() {
      console.log("double1运行了")
      return this.number * 2;
    },
    double2:{
      get(){
        return this.number*2;
      },
      set(value){
        this.number =  value / 2;
      }
    }
  }
}
</script>

<style scoped>

</style>