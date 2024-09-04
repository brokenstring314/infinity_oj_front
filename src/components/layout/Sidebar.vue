<script setup lang="ts">

</script>

<template>
  <n-space vertical size="large">
    <n-layout has-sider class="fixed">
      <n-layout-sider
          collapse-mode="transform"
          :collapsed-width="60"
          :width="240"
          show-trigger="bar"
          content-style="padding: 8px;"
          bordered
          class="flex flex-row"
      >
        <div style="width: 60px;">
          <slot name="sideIcon"></slot>
        </div>
        <div style="width: 180px;">
          <slot name="sideContent"></slot>
        </div>

      </n-layout-sider>
      <n-layout-content content-style="padding: 50vh">
        <slot name="main"></slot>
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<style scoped>

</style>