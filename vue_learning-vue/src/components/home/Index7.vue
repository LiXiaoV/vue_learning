<template>
  <div class="event">
    <p> {{number}}</p>
    <button @click="incrementBy1(1,$event)">点击加1</button>
    <button @click="incrementBy10">点击加10</button>
  </div>
</template>

<script>
export default {
  name: "Index7",
  data(){
    return {
      number: 0,
    }
  },
  methods:{
    incrementBy1(num,e){
      console.log('e.target',e.target);
      this.number+=num;
    },
    incrementBy10(e){
      console.log('e',e);
      console.log(e.__proto__.constructor);
      console.log('e.target',e.target);
      console.log('e.currentTarget',e.currentTarget);
      this.number += 10;
    }
  }
}
</script>

<style scoped>

</style>