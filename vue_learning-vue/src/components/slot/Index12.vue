<template>
  <div>
    <v-list :listData="listData"></v-list>

    <hr>

    <v-list-slot>
      <v-item-slot>Vue - 使用插槽 - 项目1</v-item-slot>
      <v-item-slot>Vue - 使用插槽 - 项目2</v-item-slot>
      <v-item-slot>Vue - 使用插槽 - 项目3</v-item-slot>
    </v-list-slot>

    <hr>

    <ul>
      <li>原生Html - 项目1</li>
      <li>原生Html - 项目2</li>
      <li>原生Html - 项目3</li>
    </ul>
  </div>
</template>

<script>
import List from "@/components/slot/List";
import ListSlot from "@/components/slot/ListSlot";
import ItemSlot from "@/components/slot/ItemSlot";
export default {
  name: "Index12",
  data(){
    return {
      listData:[
        'Vue - 不使用插槽 - 项目1',
        'Vue - 不使用插槽 - 项目2',
        'Vue - 不使用插槽 - 项目3'
      ]
    }
  },
  components:{
    "v-list":List,
    "v-list-slot":ListSlot,
    "v-item-slot":ItemSlot,
  }
}
</script>

<style scoped>

</style>