<template>
  <ul>
    <v-item v-for="(item,index) in listData" :key="index" :text="item">
    </v-item>
  </ul>
</template>

<script>
import Item from "@/components/slot/Item";
export default {
  name: "List",
  components:{
    "v-item":Item,
  },
  props:['listData']
}
</script>

<style scoped>

</style>