import { request } from './request'

export function getSinger(offset, type) {
	return request({
		url: '/artist/list?limit=30&area=7',
		params: {
			offset, //数量
			type //3分类
		}
	})
}
