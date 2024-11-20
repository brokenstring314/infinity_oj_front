import { request } from '../utils/request.ts'
import { useQuestionStore, useUserStore } from '../store/index.ts'
import { GetProblemListState } from '../../types/OutTypes.ts'



export const getSimpleProblemListByTagService = (page: any) => {
	const questionStore = useQuestionStore()
	
	const data: GetProblemListState = {
		searchString: questionStore.searchIfon?.searchString ? questionStore.searchIfon.searchString : '',
		highScore: questionStore.searchIfon?.highScore ? questionStore.searchIfon.highScore : 99999999,
		lowScore: questionStore.searchIfon?.lowScore ? questionStore.searchIfon.lowScore : 0,
		current: Number(page),
		size: 20,
		tags: {}
	}
	questionStore.tagIsSelectList.forEach(item => {
		if (data.tags?.[item.tagCategory])
			data.tags[item.tagCategory].push(item.tagId)
		else
			data.tags[item.tagCategory] = [item.tagId]
	}
	)
	console.log(data)
	return request.post('api/problem/getSimpleProblemListByTag', data)
}
export const getAllQuestionTagService = () => {
	return request.post('api/problem/getAllTag')

}
export const getProblemService = (problemId: any) => {

	return request.post('api/problem/getProblem', { problemId: problemId })
}
export const submitProblemService = (problemId: any, language: string, code: string) => {
	const userStore = useUserStore()
	const data = {
		problemId: problemId,
		language: language,
		code: code,
		userId: Number(userStore.userInfo?.loginId)
	}
	return request.post('api/problem/submitProblem', data)
}
export const getSubmissionService = (submissionId: number) => {
	return request.post('api/problem/getSubmission', "submissionId=" + submissionId)
}
// export const getQuestionContentServic = (id) => {
// 	return request.post('question/getQuestionContent', { id })
// }

// export const questionSubmitServic = ({ language, code, judgeInfo, status, questionId, userId, createTime, updateTime, isDelete, username, questionTitle }) => {
// 	return request.post('question/questionSubmit', { language, code, judgeInfo, status, questionId, userId, createTime, updateTime, isDelete, username, questionTitle })
// }

// export const getCurrentQuestionRecordServic = ({ questionId, userId }) => {
// 	return request.post('question/getCurrentQuestionRecord', { questionId, userId })
// }
// export const getQuestionRecord = () => {
// 	return request.get('question/getQuestionRecord')
// }