<template>
  <li>
    <div>
      <slot name="title"></slot>
      <span class="icon">&gt;</span>
    </div>
    <ul class="content">
      <slot name="content"></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: "SubMenuItem",
}
</script>

<style scoped>

</style>