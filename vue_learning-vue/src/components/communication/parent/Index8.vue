<template>
  <div>
    <v-input @add="add"/>
    <v-list :list="list"/>
  </div>
</template>

<script>
import MyInput from "@/components/communication/parent/Input";
import MyList from "@/components/communication/parent/List";
export default {
  name: "Index8",
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
  }
}
</script>

<style scoped>

</style>