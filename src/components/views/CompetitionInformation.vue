<script setup lang="ts">
import ComFrame from './ComFrame.vue'
</script>

<template>
  <n-card title="比赛信息" class="shadow-md mt-5">
    <n-flex justify="space-between">
      <com-frame>
        <template #comTitle>1</template>
        <template #date>2</template>
        <template #organizer>3</template>
        <template #time>4</template>
      </com-frame>
    </n-flex>
  </n-card>
</template>

<style scoped></style>