<script setup lang="ts">

import { Search } from "@icon-park/vue-next"
import { Add } from '@vicons/ionicons5'
import { Ref, ref } from "vue"
import SelectTags from './SelectTags.vue'

const tagsList: Ref<string[]> = ref([
  'blg', 'das', 'trr', 'dsdas', 'dsadas', 'dsa'
])
const showModal: Ref<boolean> = ref(false)
const tagsSet: Ref<Set<string>> = ref(new Set())

const changeTags = (name: string) => {
  if (!tagsSet.value.delete(name))
    tagsSet.value.add(name)
}


</script>

<template>

  <n-card title="筛选条件" class="min-w-80">
    <div class="flex flex-col sm:flex-row sm:items-center">
      <div class="flex flex-col sm:flex-row w-full sm:items-center">
        <span class="min-w-28 ml-2 mr-2">题目难度</span>
        <n-select placeholder="题目难度" class="min-w-36 max-w-54" />
        <span class="min-w-28 ml-2 mr-2 sm:ml-4 sm:mr-4">关键词搜索</span>
        <n-input class="min-w-36 max-w-128" placeholder="标题或题目编号">
          <template #suffix>
            <search class="flex items-center" theme="outline" size="24" fill="#333" />
          </template>
        </n-input>
      </div>
    </div>
    <div class="mt-4 flex flex-col sm:flex-row sm:items-center">
      <span class="min-w-28 ml-2 mr-2">题目标签</span>
      <n-button type="primary" dashed @click="showModal = true">
        <n-icon :component="Add"></n-icon>
      </n-button>
      <n-modal v-model:show="showModal" :mask-closable="false" preset="card" class="min-w-fit max-w-4xl max-h-fit">
        <h2>选择标签</h2>
        <select-tags v-for="tagName in tagsList" @changeTags="changeTags" :name="tagName"
          :is-select="tagsSet.has(tagName)"></select-tags>
      </n-modal>
      <n-tag v-for="tagName in tagsSet" class="ml-2" type="info" closable @close="changeTags(tagName)">
        {{ tagName }}
      </n-tag>
    </div>
  </n-card>
</template>

<style scoped></style>