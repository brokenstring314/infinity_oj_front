import {request} from '@/utils/request'

export const getQuestionListServic=()=>{
	return request.get('question/questionList')
}
export const getQuestionContentServic=(id)=>{
	return request.post('question/getQuestionContent',{id})
}

export const questionSubmitServic=({language,code,judgeInfo,status,questionId,userId,createTime,updateTime,isDelete,username,questionTitle})=>{
	return request.post('question/questionSubmit',{language,code,judgeInfo,status,questionId,userId,createTime,updateTime,isDelete,username,questionTitle})
}

export const getCurrentQuestionRecordServic=({questionId,userId})=>{
	return request.post('question/getCurrentQuestionRecord',{questionId,userId})
}
export const getQuestionRecord=()=>{
	return request.get('question/getQuestionRecord')
}