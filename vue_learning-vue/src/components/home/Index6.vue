<template>
<!--  tips:v-if不要与v-for连用，因为v-for优先级比v-if高，可以将v-if放在父级或子级标签上-->
  <div>
    <h1>遍历数组</h1>
    <ul>
      <li v-for="(item,index) in array" :key="index">
        {{ index }} - {{ item.value }}
      </li>
    </ul>
    <hr>

    <h1>遍历对象</h1>
    <ul>
      <li v-for="(value,key,index) in object" :key="key">
        {{ index }} - {{ key }} - {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index6",
  data() {
    return {
      array: [
        {
          id: 1,
          value: '项目1',
        },
        {
          id: 2,
          value: '项目2',
        },
        {
          id: 3,
          value: '项目3',
        },
      ],
      object:{
        name:'xiaov',
        hobby:'basketball'
      }
    }
  }
}
</script>

<style scoped>

</style>