<script setup lang="ts">

import {Search} from "@icon-park/vue-next";
</script>

<template>
  <n-card title="筛选条件" class="min-w-80 max-w-360">
    <div class="flex flex-col sm:flex-row sm:items-center">
      <div class="flex flex-col sm:flex-row w-full sm:items-center">
        <span class="min-w-28 ml-2 mr-2">题目难度</span>
        <n-select placeholder="题目难度" class="min-w-36 max-w-54" v-model:value="value" :options="questionsLevel"/>
        <span class="min-w-28 ml-2 mr-2 sm:ml-4 sm:mr-4">关键词搜索</span>
        <n-input class="min-w-36 max-w-128" placeholder="标题或题目编号">
          <template #suffix>
            <search class="flex items-center" theme="outline" size="24" fill="#333"/>
          </template>
        </n-input>
      </div>
    </div>
    <div class="mt-4 flex flex-col sm:flex-row sm:items-center">
      <span class="min-w-28 ml-2 mr-2">题目标签</span>
      <n-tree-select
          multiple
          :options="options"
          :default-value="['Norwegian Wood']"
          @update:value="handleUpdateValue"
      />
    </div>
  </n-card>
</template>

<style scoped>

</style>