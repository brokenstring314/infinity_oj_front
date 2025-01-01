<script setup lang="ts">
import { Add } from '@vicons/ionicons5'
import { Ref, ref } from "vue"
import { useQuestionStore } from '../../store/index'
import SelectTagsTabs from './SelectTagsTabs.vue'
import { RemoveSharp } from '@vicons/ionicons5'
import { useRoute } from 'vue-router'

//控制模态框是否展示
const showModal: Ref<boolean> = ref(false)

const route = useRoute()

//问题仓库
const questionStore = useQuestionStore()

//控制只能输入数字
const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value)

const onSearch = async () => {
  await questionStore.getQuestionList(route.params.page)
}
</script>

<template>

  <n-card title="筛选条件" class="min-w-80">

    <div class="flex items-center mb-5">
      <div class="min-w-26">选择难度</div>
      <n-input style="width: 10em;" type="text" :allow-input="onlyAllowNumber" placeholder="最小分数"
        v-model:value="questionStore.issueSearchIfon.lowScore" />
      <n-icon :component="RemoveSharp"></n-icon>
      <n-input style="width: 10em;" type="text" :allow-input="onlyAllowNumber" placeholder="最大分数"
        v-model:value="questionStore.issueSearchIfon.highScore" />
    </div>

    <div class="flex items-center mb-5">
      <div class="min-w-26">搜索题目</div>
      <n-input style="width: 30em;" placeholder="输入题目名称" v-model:value="questionStore.issueSearchIfon.searchString" />
    </div>

    <div class="flex items-center mb-5">
      <span class="min-w-26">题目标签</span>
      <n-button type="primary" dashed @click="showModal = true">
        <n-icon :component="Add"></n-icon>
      </n-button>
      <n-modal v-model:show="showModal" :mask-closable="false" preset="card" class="min-w-fit max-w-4xl max-h-fit">
        <SelectTagsTabs></SelectTagsTabs>
      </n-modal>
      <n-tag v-for="tag in questionStore.tagIsSelectList" class="ml-2" type="info" closable
        @close="questionStore.delectTag(tag)">
        {{ tag.tagName }}
      </n-tag>
    </div>

    <div>
      <n-button class="min-w-26 mr-5" type="success" @click="onSearch">搜索</n-button>
      <n-button class="min-w-26" type="info" @click="questionStore.clearSearchInfo">清空</n-button>
    </div>
  </n-card>
</template>

<style scoped></style>