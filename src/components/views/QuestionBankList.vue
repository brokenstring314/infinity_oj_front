<script setup lang="ts">
import type { QuestionListInfoState } from '../../../types/OutTypes'
import { h, ref, Ref } from 'vue'
import { NTag, NProgress } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { useQuestionStore } from '../../store/index'
import { router } from '../../routes/router'
import { useRoute } from 'vue-router'
import Spin from './Spin.vue'
import { paginationSize } from '../../utils/OutMessage'

const route = useRoute()

const questionStore = useQuestionStore()

const currentPage: Ref<number> = ref(0)

const questionTotal: Ref<number> = ref(0)
//是否加载完成
const isLoadFinish: Ref<boolean> = ref(false)
//获取数据方法
const getQuestionList = async () => {
  isLoadFinish.value = false
  console.log(route.params.page)
  currentPage.value = Number(route.params.page)
  questionTotal.value = await questionStore.getQuestionList(route.params.page)
  console.log(questionStore.questionList)
  isLoadFinish.value = true
}
//题目列表列信息
function createColumns(): DataTableColumns<QuestionListInfoState> {
  return [
    {
      title: '题目编号',
      key: 'problemId',
      width: 120
    },
    {
      title: '题目名称',
      key: 'title'

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
              default: () => tagKey.tagName
            }
          )
        })
        return tags
      }
    },
    {
      title: '难度分数',
      key: 'score',
      width: 100,
      sorter: {
        compare: (a, b) => a.score - b.score,
        multiple: 2
      }
    },
    {
      title: '通过率',
      key: 'submission_count',
      width: 240,
      render(row) {
        return h(
          NProgress, {
          type: 'line',
          percentage: row.submission_count === 0 ? 0 : row.accepted_count * 100 / row.submission_count,
          height: 17,
          showIndicator: false
        }
        )
      }
    },
    {
      title: '通过提交数',
      key: 'accepted_count',
      width: 120,
      sorter: {
        compare: (a, b) => a.accepted_count - b.accepted_count,
        multiple: 3
      }
    },
    {
      title: '',
      key: 'solve_status',
      width: 40,
      render(row) {
        return questionStore.isPassageH(row.solve_status)
      }
    }
  ]
}

//跳转到题目
const onRowClick = (row: any) => {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      router.push({ path: `/ProblemDetail/${row.problemId}` })
    }
  }
}
const pageChange = async (page: number) => {
  router.push({ path: `/questionBank/${page}` })
  route.params.page = page + ""
  await getQuestionList()
}
getQuestionList()
</script>

<template>

  <n-card title="题目列表">
    <Spin v-if="!isLoadFinish"></Spin>
    <n-list v-else>
      <template #default>
        <n-data-table :columns="createColumns()" :data="questionStore.questionList" :row-props="onRowClick" />
      </template>
      <template #footer>
        <n-pagination
          :page-count="Math.floor(questionTotal / paginationSize) + (questionTotal % paginationSize ? 1 : 0)"
          :page="currentPage" :on-update:page="pageChange" />
      </template>
    </n-list>
  </n-card>
</template>

<style scoped></style>