<script setup lang="ts">
import QuestionBankSearch from "../views/QuestionBankSearch.vue";
import QuestionBankList from "../views/QuestionBankList.vue";
</script>

<template>
  <n-card :bordered="false" class="w-full px-32">
    <question-bank-search class="shadow-md w-full"></question-bank-search>
    <question-bank-list class="mt-8 shadow-md w-full"></question-bank-list>
  </n-card>
</template>

<style scoped></style>