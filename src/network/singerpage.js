import { request } from './request'

export function getSingerPage(id) {
	return request({
		url: '/artists',
		params: {
			id
		}
	})
}

export class Artist{
	constructor(artist, hotSongs) {
		this.alias = artist.alias
		this.briefDesc = artist.briefDesc
		this.id = artist.id
		this.singerName = artist.name
		this.bgImg = artist.picUrl
		this.hotSongs = hotSongs
	}
}

export function getSongsCheck(id) {
	return request({
		url: '/check/music',
		params: {
			id
		}
	})
}

export function getSongUrl(id) {
	return request({
		url: '/song/url',
		params: {
			id
		}
	})
}

export function getSongInfo(ids) {
	return request({
		url: '/song/detail',
		params: {
			ids
		}
	})
}
