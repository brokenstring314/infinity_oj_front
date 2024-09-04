<script setup lang="ts">

</script>

<template>
<n-card title="题目列表" class="min-w-80 max-w-360">
  <n-list>
    <template #default>
      <n-data-table
          :columns="columns"
          :data="data"
          :pagination="pagination"
          @update:sorter="handleUpdateSorter"
          :max-height="1800"
      />
    </template>
    <template #footer>
      fff
    </template>
  </n-list>
</n-card>
</template>

<style scoped>

</style>