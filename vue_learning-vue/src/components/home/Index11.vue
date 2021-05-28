<template>
<!--  vue里面：dada改变了之后dom不会立即渲染，下一个nextTick才渲染，导致慢一拍-->
  <div>
    <ul ref="ulRef">
      <li v-for="(item,index) in items" :key="index">
        {{item}}
      </li>
    </ul>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  name: "Index11",
  data(){
    return {
      items: ['项目1','项目2','项目3']
    }
  },
  methods:{
    add(){
      this.items.push(Math.random());

      // dom异步渲染完毕之后才执行
      this.$nextTick(() =>{
        // 获取子元素个数
        const ulElem = this.$refs.ulRef;
        const length = ulElem.childNodes.length;
        console.log('length',length)
      })

    }
  }
}
</script>

<style scoped>

</style>