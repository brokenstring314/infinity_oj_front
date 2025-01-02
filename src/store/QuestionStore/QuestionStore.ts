import { defineStore } from 'pinia'
import { ref, Ref, h } from 'vue'
import type { QuestionListInfoState, tagState } from '../../../types/OutTypes'
import { CheckmarkSharp, Close, RemoveSharp } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { getSimpleProblemListByTagService, getSubmissionListService } from '../../api/question'

export const useQuestionStore = defineStore('question', () => {
	//已选择tag列表
	const tagIsSelectList: Ref<tagState[]> = ref([])
	//题目搜索信息
	const issueSearchIfon: Ref<any> = ref({})
	//记录搜索信息
	const recordSearchIfon: Ref<any> = ref({})

	//题目列表数据
	const questionList: Ref<QuestionListInfoState[]> = ref([])
	//题目总条数
	const questionTotal = ref(0)
	//记录列表数据
	const SubmitRecordList = ref([])




	//清除搜索信息
	const clearSearchInfo = () => {
		issueSearchIfon.value = {}
		recordSearchIfon.value = {}
		tagIsSelectList.value = []
		location.reload()
	}
	const addTag = (tag: tagState) => {
		tagIsSelectList.value.push(tag)
	}

	const getQuestionList = async (page: any) => {
		const data = await getSimpleProblemListByTagService(page)
		questionList.value = data.data.records
		questionTotal.value = data.data.total
	}

	const getSubmitRecordList = async (page: any) => {
		const data = await getSubmissionListService(page)
		SubmitRecordList.value = data.data.records
		return data.data.total
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
		issueSearchIfon,
		clearSearchInfo,
		getQuestionList,
		questionList,
		recordSearchIfon,
		getSubmitRecordList,
		SubmitRecordList,
		questionTotal
	}
}, {
	persist: {
		key: 'question', //存储名称
		storage: localStorage, // 存储方式
		omit: ['questionList']
	}
})