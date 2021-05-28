<template>
  <div>
    <!--  <ul class="list clearfix">-->
    <!--    <li class="item active">项目1</li>-->
    <!--    <li class="item">项目2</li>-->
    <!--    <li class="item">项目3</li>-->
    <!--  </ul>-->

    <!--      对象-->
    <!--  <ul class="list clearfix">-->
    <!--    <li class="item" :class="{'active':isActive}">项目1</li>-->
    <!--    <li class="item">项目2</li>-->
    <!--    <li class="item">项目3</li>-->
    <!--  </ul>-->

    <!--  数组-->
    <ul class="list clearfix">
      <li class="item" :class="['active']">项目1</li>
      <li class="item">项目2</li>
      <li class="item">项目3</li>
    </ul>

    <!--  样式-->
    <ul class="list clearfix">
      <li class="item" :style="styleData">项目1</li>
      <li class="item">项目2</li>
      <li class="item">项目3</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "Index4",
  data(){
    return {
      isActive: false,
      styleData:{
        color: 'blue',
        fontWeight: 'bold'
      }
    }
  }
}
</script>

<style scoped>
.active{
  color: red;
}
</style>