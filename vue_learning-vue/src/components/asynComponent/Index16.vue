<template>
  <div>
    <v-text v-if="show"></v-text>
    <button @click="showTest">显示Test</button>
  </div>
</template>

<script>
export default {
  name: "Index16",
  components:{
    "v-text":()=>import(/* webpackChunkName:"test" */ "@/components/asynComponent/Test")
  },
  data(){
    return {
      show:false,
    }
  },
  methods:{
    showTest(){
      this.show = true;
    }
  }
}
</script>

<style scoped>

</style>