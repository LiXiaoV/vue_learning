<template>
  <div>
    <v-input @add="add"/>
    <v-list :list="list"/>
  </div>
</template>

<script>
import MyInput from "@/components/lifecycle/Input";
import MyList from "@/components/lifecycle/List";
export default {
  name: "Index10",
  data(){
    return {
      list: [
        {
          id: 1,
          title: '标题1',
        },
        {
          id: 2,
          title: '标题2',
        },
      ]
    }
  },
  components:{
    "v-input": MyInput,
    "v-list": MyList,
  },
  methods:{
    add(title){
      this.list.push({
        id:Math.random(),
        title: title
      })
    }
  },
  created() {
    console.log("parent component created")
  },
  mounted() {
    console.log("parent component mounted")
  },
  beforeUpdate() {
    console.log("parent component before update")
  },
  updated() {
    console.log("parent component updated")
  }
}
</script>

<style scoped>

</style>