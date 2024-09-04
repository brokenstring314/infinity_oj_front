import {request} from '../utils/request'

export const userEnrollService=({username,password})=>{
	return request.post('api/register',{username,password})
}
export const userLoginService=({username,password})=>{
	return request.post('api/login',{username,password})
}
export const myInfoService=(uid)=>{
	return request.post('my/myInfo',{uid})
}
export const myAvatarChangeService = (uid,user_pic)=>{
	return request.post('my/AvatarChange',{uid,user_pic})
}
export const getQuestionListService = () => {
	return request.get('question/questionList')
}
export const getQuestionContentService = (id) => {
	return request.post('question/getQuestionContent',{id})
}