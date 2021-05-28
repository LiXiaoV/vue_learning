<template>
  <div>
    <!--    插值表达式-->
    <h1>{{ title }}</h1>

    <!--    动态属性-->
    <p :id="dynamicId">{{ title1 }}</p>

    <!--    表达式-->
    <p>{{ number }}</p>
    <p>{{ number + 1 }}</p>
    <p>{{flag?"yes":"no"}}</p>
    <p>{{title.split(' ').reverse().join(' ')}}</p>

<!--    v-html:会覆盖当前元素的子元素-->
    <div v-html="html1">
      <p>hello world!</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "Index1",
  data() {
    return {
      title: "hello vue!!!",
      title1: "你好，世界",
      dynamicId: Math.random(),
      number: 1,
      flag:true,
      html1:'<p>i\'m xiaov</p>',
    }
  }
}
</script>

<style scoped>

</style>