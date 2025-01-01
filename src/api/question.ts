import { request } from '../utils/request.ts'
import { useQuestionStore, useUserStore } from '../store/index.ts'
import { GetProblemListState } from '../../types/OutTypes.ts'
import { paginationSize } from '../utils/OutMessage.ts'

export const getSubmissionListService = (page: any) => {
	const recordSearchIfon = useQuestionStore().recordSearchIfon
	const data: any = {
		current: page,
		size: paginationSize,
		problemId: recordSearchIfon.problemId ? recordSearchIfon.problemId : null,
		userId: recordSearchIfon.userId ? recordSearchIfon.userId : null,
		userName: recordSearchIfon.userName ? recordSearchIfon.userName : null
	}
	console.log(data)
	console.log(recordSearchIfon.userId)
	return request.post('api/problem/getSubmissionList', data)
}

export const getSimpleProblemListByTagService = (page: any) => {
	const issueSearchIfon = useQuestionStore().issueSearchIfon
	const tagIsSelectList = useQuestionStore().tagIsSelectList
	const data: GetProblemListState = {
		searchString: issueSearchIfon?.searchString ? issueSearchIfon.searchString : '',
		highScore: issueSearchIfon?.highScore ? issueSearchIfon.highScore : 99999999,
		lowScore: issueSearchIfon?.lowScore ? issueSearchIfon.lowScore : 0,
		current: Number(page),
		size: paginationSize,
		tags: {}
	}
	tagIsSelectList.forEach(item => {
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