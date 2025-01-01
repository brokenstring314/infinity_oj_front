<script setup lang="ts">
import QuestionSubmitRecordSearch from '../views/QuestionSubmitRecordSearch.vue';
import QuestionSubmitRecordList from '../views/QuestionSubmitRecordList.vue'
</script>

<template>
    <n-card :bordered="false" class="w-full px-32">
        <QuestionSubmitRecordSearch class="shadow-md w-full"></QuestionSubmitRecordSearch>
        <QuestionSubmitRecordList class="shadow-md w-full"></QuestionSubmitRecordList>
    </n-card>
</template>

<style scoped></style>