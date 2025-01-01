<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuestionStore } from '../../store/index'
const questionStore = useQuestionStore()
const route = useRoute()
const onSearch = async () => {
    await questionStore.getSubmitRecordList(route.params.page)
}
</script>

<template>
    <n-card title="筛选条件" class="min-w-80">

        <div class="flex items-center mb-5">
            <div class="mr-3">问题id:</div>
            <n-input style="width: 10em;" type="text" placeholder="id" class="mr-8"
                v-model:value="questionStore.recordSearchIfon.problemId" />
            <div class="mr-3">用户id:</div>
            <n-input style="width: 10em;" type="text" placeholder="id" class="mr-8"
                v-model:value="questionStore.recordSearchIfon.userId" />
            <div class="mr-3">用户名:</div>
            <n-input style="width: 10em;" type="text" placeholder="用户名" class="mr-8"
                v-model:value="questionStore.recordSearchIfon.userName" />
        </div>



        <div>
            <n-button class="min-w-26 mr-5" type="success" @click="onSearch">搜索</n-button>
            <n-button class="min-w-26" type="info" @click="questionStore.clearSearchInfo">清空</n-button>
        </div>

    </n-card>
</template>

<style scoped></style>