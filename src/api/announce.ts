import { request } from '../utils/request.ts'


export const getSimpleAnnouncementList = async (announcements: any) => {
	const data = await request.post('api/problem/getSimpleProblemListByTag');

	return data;
}
