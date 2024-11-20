import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import type { QuestionListInfoState } from '../../../types/OutTypes'
import { getSimpleProblemListByTagServic } from '../../api/question'

export const useQuestionServicStore = defineStore('questionServic', () => {


    //题目列表数据
    const questionList: Ref<QuestionListInfoState[]> = ref([])

    //获取题目列表数据
    const getQuestionList = async () => {
        questionList.value = (await getSimpleProblemListByTagServic()).data.records
    }

    return {
        getQuestionList,
        questionList
    }
}, {
    persist: false
})