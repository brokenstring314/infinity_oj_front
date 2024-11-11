import { request } from '../utils/request.ts'
import type { LoginInfoState } from '../../types/LoginInfoState.ts'


export const userRegisterService = (info: LoginInfoState) => {
	return request.post('api/auth/register', info)
}
export const userLoginService = (info: LoginInfoState) => {
	return request.post('api/auth/login', info)
}
// export const myInfoService = (uid) => {
// 	return request.post('my/myInfo', { uid })
// }
// export const myAvatarChangeService = (uid, user_pic) => {
// 	return request.post('my/AvatarChange', { uid, user_pic })
// }
// export const getQuestionListService = () => {
// 	return request.get('question/questionList')
// }
// export const getQuestionContentService = (id) => {
// 	return request.post('question/getQuestionContent', { id })
// }