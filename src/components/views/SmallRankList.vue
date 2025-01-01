<script setup lang="ts">
import type { RankInfo } from '../../../types/RankInfo.ts'
const data: RankInfo[] = [
    { rank: 1, username: 'KAZHYI', scores: 5, passQuestion: 3 },
    { rank: 2, username: 'root', scores: 1, passQuestion: 1 },
    { rank: 3, username: 'blg', scores: 0, passQuestion: 0 },
    { rank: 4, username: 'blg', scores: 0, passQuestion: 0 },
    { rank: 5, username: 'blg', scores: 0, passQuestion: 0 },
    { rank: 6, username: 'blg', scores: 0, passQuestion: 0 },
    { rank: 7, username: 'blg', scores: 0, passQuestion: 0 },
]
function createColumns() {
    return [
        {
            title: '名次',
            key: 'rank'
        },
        {
            title: '用户',
            key: 'username'
        },
        {
            title: '分数',
            key: 'scores'
        },
        {
            title: '过题数',
            key: 'passQuestion'
        }
    ]
}
</script>

<template>
    <n-card title="排名" class="shadow-md mt-5">
        <n-data-table :data="data" :columns="createColumns()" :bordered="false" />
    </n-card>
</template>

<style scoped>
.n-card {
    max-width: 400px;
}
</style>