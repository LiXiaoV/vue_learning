<template>
  <div>
    <v-current-user>
      <template v-slot:default="slotProps">
        {{slotProps.user.age}}
      </template>
    </v-current-user>
  </div>

</template>

<script>
import CurrentUser from "@/components/scopeSlot/CurrentUser";
export default {
  name: "Index13",
  components:{
    "v-current-user":CurrentUser
  }
}
</script>

<style scoped>

</style>