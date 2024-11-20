<script lang="ts" setup>
import type { tagState } from '../../../types/OutTypes'
import SelectTags from './SelectTags.vue'
import { getAllQuestionTagService } from '../../api/question'
import { ref, Ref, onMounted } from 'vue'
//tag分类列表
const tagsClassifyList: Ref<string[]> = ref([])
//tag列表
const tagList: Ref<tagState[]> = ref([])

//是否加载完成
const isLoadFinish: Ref<boolean> = ref(false)

//获取数据
onMounted(async () => {
  tagList.value = await (await getAllQuestionTagService()).data
  tagList.value.forEach((element: tagState) => {
    tagsClassifyList.value.push(element.tagCategory)
  });
  tagsClassifyList.value = [...new Set(tagsClassifyList.value)]
  isLoadFinish.value = true
})
</script>

<template>
  <n-spin class="m-auto" size="large" v-if="!isLoadFinish" />
  <n-tabs type="line" animated v-else>
    <n-tab-pane v-for="tagsClassify in tagsClassifyList" :name="tagsClassify" :tab="tagsClassify">
      <block v-for="tag in tagList">
        <select-tags :tag="tag" v-if="tagsClassify === tag.tagCategory"></select-tags>
      </block>
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped></style>