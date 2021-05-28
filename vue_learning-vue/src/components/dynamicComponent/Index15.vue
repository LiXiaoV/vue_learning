<template>
  <div>
    <div v-for="(item,index) in productData" :key="index">
      <component :is="`v-${item.type}`"></component>
    </div>

  </div>
</template>

<script>
import Text from "@/components/dynamicComponent/Text";
import Image from "@/components/dynamicComponent/Image";
import Video from "@/components/dynamicComponent/Video";
export default {
  name: "Index15",
  components:{
    "v-text":Text,
    "v-image":Image,
    "v-video":Video,
  },
  data(){
    return {
      productData:[
        {
          id:1,
          type:'text',
        },
        {
          id:2,
          type:'image',
        },
        {
          id:3,
          type:'text',
        },
        {
          id:4,
          type:'video',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>