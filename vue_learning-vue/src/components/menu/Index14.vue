<template>
  <div>
    <v-layout>
      <template v-slot:header>
        <h1>标题</h1>
      </template>

      <p>主体内容1</p>
      <p>主体内容2</p>

      <template v-slot:footer>
        <p>联系方式</p>
      </template>
    </v-layout>
    <hr>
    <div>
      <div v-for="item in menuData" :key="item.id">

        <menu-item v-if="!item.children">
          {{item.title}}
        </menu-item>

        <sub-menu-item v-else>
          <template v-slot:title>
            {{item.title}}
          </template>
          <template v-slot:content>
            <menu-item v-for="child in item.children" :key="child.id">
              {{child.title}}
            </menu-item>
          </template>
        </sub-menu-item>
      </div>

    </div>
  </div>
</template>

<script>
import menuData from "../../data/menuData.js";

import Layout from "@/components/menu/Layout";
import MenuItem from "@/components/menu/MenuItem";
import SubMenuItem from "@/components/menu/SubMenuItem";
export default {
  name: "MenuIndex",
  components:{
    // 使用组件
    "v-layout":Layout,
    "menu-item":MenuItem,
    "sub-menu-item":SubMenuItem,
  },
  data(){
    return {
      menuData: menuData,
    }
  }
}
</script>

<style scoped>

</style>