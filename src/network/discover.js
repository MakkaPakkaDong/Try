import { request } from './request'

export function getDiscover() {
	return request({
		url: '/homepage/block/page'
	})
}

export function getDiscoverIcon() {
	return request({
		url: '/homepage/dragon/ball'
	})
}

export function getDiscoverBanner() {
	return request({
		url: '/banner'
	})
}

export function getDiscoverSheet() {
	return request({
		url: '/personalized?limit=3'
	})
}
