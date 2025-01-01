<script setup lang="ts">
import type { QuestionListInfoState } from '../../../types/OutTypes'
import { h, ref, Ref } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { useQuestionStore } from '../../store/index'
import { router } from '../../routes/router'
import { useRoute } from 'vue-router'
import Spin from './Spin.vue'
import { paginationSize, outMsgColor } from '../../utils/OutMessage'
import { Eyebrow } from '@icon-park/vue-next'

const route = useRoute()

const questionStore = useQuestionStore()

const currentPage: Ref<number> = ref(0)

const questionTotal: Ref<number> = ref(0)
//是否加载完成
const isLoadFinish: Ref<boolean> = ref(false)
//获取数据方法
const SubmitRecordList = async () => {
    isLoadFinish.value = false
    console.log(route.params.page)
    currentPage.value = Number(route.params.page)
    questionTotal.value = await questionStore.getSubmitRecordList(route.params.page)
    console.log(questionStore.SubmitRecordList)
    isLoadFinish.value = true
}
//题目列表列信息
function createColumns(): DataTableColumns<any> {
    return [
        {
            title: '提交编号',
            key: 'submitId',
            width: 120
        },
        {
            title: '题目名称',
            key: 'problemName',
            width: 300
        },
        {
            title: '提交用户',
            key: 'userName'
        }, {
            title: '运行时间',
            key: 'time',
            render(row) {
                return h('text', {
                    innerHTML: row.time + "ms"
                })
            },
        },
        {
            title: '提交结果',
            key: 'status',
            render(row) {
                return h('text', {
                    style: { color: outMsgColor(row.status).color },
                    innerHTML: outMsgColor(row.status).text
                })
            }
        }, {
            title: '语言',
            key: 'languageId',
            render(row) {
                return h('text', {
                    innerHTML: 'java'
                })
            },
        },
        {
            title: '提交时间',
            key: 'submitTime',
            render(row) {
                return h('text', {
                    innerHTML: new Date(row.submitTime).toLocaleString()
                })
            },
            width: 200
        }
    ]
}


const onRowClick = (row: any) => {

}
const pageChange = async (page: number) => {
    router.push({ path: `/questionSubmitRecord/${page}` })
    route.params.page = page + ""
    await SubmitRecordList()
}
SubmitRecordList()
</script>

<template>

    <n-card title="提交列表">
        <Spin v-if="!isLoadFinish"></Spin>
        <n-list v-else>
            <template #default>
                <n-data-table :columns="createColumns()" :data="questionStore.SubmitRecordList"
                    :row-props="onRowClick" />
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