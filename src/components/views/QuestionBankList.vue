<script setup lang="ts">
import type { QuestionListInfoState } from '../../../types/OutTypes'
import { defineComponent, h, ref, Ref } from 'vue'
import { NButton, NTag, useMessage, NProgress } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
// export interface QuestionListInfoState {
//     questionId:number
//     questionName:string
//     tags:string[]
//     difficultyScores:number
//     passRate:number
// }

//当前页
const page: Ref<number> = ref(1)

//题目列表数据
const data: QuestionListInfoState[] = [
  {
    questionId: 1,
    questionName: 'blg bl l',
    tags: ['blg', 'myg'],
    difficultyScores: 123,
    passRate: 12.6
  }
]

//题目列表列信息
function createColumns(): DataTableColumns<QuestionListInfoState> {
  return [
    {
      title: '题目编号',
      key: 'questionId',
      width: 120
    },
    {
      title: '题目名称',
      key: 'questionName'

    },
    {
      title: '标签',
      key: 'tags',
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info',
              bordered: false
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
    },
    {
      title: '难度分数',
      key: 'difficultyScores',
      width: 100
    },
    {
      title: '通过率',
      key: 'passRate',
      width: 250,
      render(row) {
        return h(
          NProgress, {
          type: 'line',
          percentage: row.passRate,
          height: 17,
          showIndicator: false
        }
        )
      }
    }
  ]
}

</script>

<template>
  <n-card title="题目列表">
    <n-list>
      <template #default>
        <n-data-table :columns="createColumns()" :data="data" :max-height="1800" />
      </template>
      <template #footer>
        <n-pagination v-model:page="page" :page-count="100" class="m-auto" />
      </template>
    </n-list>
  </n-card>
</template>

<style scoped></style>