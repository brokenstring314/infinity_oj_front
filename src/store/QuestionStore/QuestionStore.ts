import { defineStore } from 'pinia'
import { ref, Ref, h } from 'vue'
import type { QuestionListInfoState, tagState } from '../../../types/OutTypes'
import { CheckmarkSharp, Close, RemoveSharp } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { getSimpleProblemListByTagService } from '../../api/question'

export const useQuestionStore = defineStore('question', () => {
	//已选择tag列表
	const tagIsSelectList: Ref<tagState[]> = ref([])
	//搜索信息
	const searchIfon: Ref<any> = ref({})


	//题目列表数据
	const questionList: Ref<QuestionListInfoState[]> = ref([])




	//清除搜索信息
	const clearSearchInfo = () => {
		searchIfon.value = {}
		location.reload()
	}
	const addTag = (tag: tagState) => {
		tagIsSelectList.value.push(tag)
	}

	const getQuestionList = async (page: any) => {

		questionList.value = (await getSimpleProblemListByTagService(page)).data.records

		console.log(questionList.value)
	}



	const delectTag = (tag: tagState) => {
		tagIsSelectList.value = tagIsSelectList.value.filter(item => item.tagId != tag.tagId)
	}

	const isTag = (tag: tagState) => {
		return tagIsSelectList.value.some(item => item.tagId === tag.tagId)
	}

	const isPassageH = (isPassage: number) => {

		if (isPassage === 2)
			return h(
				NIcon, {
				component: CheckmarkSharp,
				size: 20,
				color: '#24E93E'
			}
			)
		else if (isPassage === 1)
			return h(
				NIcon, {
				component: Close,
				size: 20,
				color: '#F00D0D'
			}
			)
		else
			return h(
				NIcon, {
				component: RemoveSharp,
				size: 20
			}
			)
	}





	return {
		tagIsSelectList,
		addTag,
		delectTag,
		isTag,
		isPassageH,
		searchIfon,
		clearSearchInfo,
		getQuestionList,
		questionList
	}
}, {
	persist: {
		key: 'question', //存储名称
		storage: localStorage, // 存储方式
		omit: ['questionList']
	}
})