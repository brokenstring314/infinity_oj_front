import { request } from '../utils/request.ts'


export const getSimpleAnnouncementList = async () => {
	const data = await request.post('/api/announce/getSimpleAnnouncementList');

	return data;
}
