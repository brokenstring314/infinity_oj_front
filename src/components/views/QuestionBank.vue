<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@icon-park/vue-next'
import QuestionBankSearch from "./QuestionBankSearch.vue";
import QuestionBankList from "./QuestionBankList.vue";

let value = ref(null)
let questionsLevel: Array<any> = [
  {
    label: "入门",
    value: 'a'
  },
  {
    label: "普及",
    value: 'b'
  },
  {
    label: "提高",
    value: 'c'
  }
]
</script>

<template>
  <n-card :bordered="false" class="w-full">
    <question-bank-search class="shadow-md w-full"></question-bank-search>
    <question-bank-list class="mt-8 shadow-md w-full"></question-bank-list>
  </n-card>
</template>

<style scoped></style>