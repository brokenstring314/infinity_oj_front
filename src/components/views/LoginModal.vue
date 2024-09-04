<script setup lang="ts">

</script>

<template>
  <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      preset="dialog"
      title="确认"
      content="你确认"
      positive-text="确认"
      negative-text="算了"
      @positive-click="onPositiveClick"
      @negative-click="onNegativeClick"
  />
</template>

<style scoped>

</style>