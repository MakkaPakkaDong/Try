<template>
	<div id="discover">
		<dis-nav></dis-nav>
		<dis-swiper :banners="banners"/>	
		<main-dis-icon :icon="icon"/>
		<dis-recom-sheet/>
		<sheet-item>
			<dis-sheet-item v-for="(item, index) in sheet" :key="index">
				<img slot="sheet-img" :src="item.picUrl" alt="">
				<div slot="sheet-text">{{item.name}}</div>
			</dis-sheet-item>
		</sheet-item>
		<mlog-scroll>
			<scroll-y ref="bs" slot="mlog-item">
				<dis-mlog :mlog="mlog"></dis-mlog>
			</scroll-y>
		</mlog-scroll>
	</div>
</template>

<script>
import DisNav from './childcomps/DisNav'
import DisSwiper from './childcomps/DisSwiper'
import DisRecomSheet from './childcomps/DisRecomSheet'
import DisSheetItem from './childcomps/DisSheetItem'

import MainDisIcon from 'components/content/maindisicon/MainDisIcon'
import SheetItem from 'components/common/tabbar/SheetItem'
import MlogScroll from 'components/common/scroll/MlogScroll'
import ScrollY from 'components/common/scroll/ScrollY'

import {
	getDiscoverBanner, 
	getDiscoverIcon, 
	getDiscoverSheet,
	getDiscover
} from 'network/discover'
import DisMlog from './childcomps/DisMlog.vue'


export default {
	name: 'Discover',
	components: {
		DisNav,
		DisSwiper,
		MainDisIcon,
		DisRecomSheet,
		DisSheetItem,
		SheetItem,
		MlogScroll,
		ScrollY,
		DisMlog
	},
	data() {
		return {
			banners: [],
			icon: [],
			sheet: [],
			mlog: [],
		}
	},
	created() {
		// getDiscoverBanner().then(res => {
		// 	console.log(res);
		// 	this.banners = res.banners
		// })
		this.getDiscoverMethod()
		this.getDiscoverBannerMethod()
		this.getDiscoverIconMethod()
		this.getDiscoverSheetMethod()

		this.$bus.$on('imageLoad', () => {
			console.log('监听到图片加载完成');
			this.$refs.bs.refresh()
		})
	},
	computed: {
		activated() {
			
		},
	},
	methods: {
		// 网络请求
		getDiscoverMethod() {
			getDiscover().then(res => {
				// console.log(res);
				this.mlog = res.data.blocks[2].extInfo
				console.log(this.mlog);
			})
		},
		getDiscoverBannerMethod() {
			getDiscoverBanner().then(res => {
				// console.log(res);
				this.banners = res.banners
			})
		},
		getDiscoverIconMethod() {
			getDiscoverIcon().then(res => {
				// console.log(res);
				this.icon = res.data
			})
		},
		getDiscoverSheetMethod() {
			getDiscoverSheet().then(res => {
				// console.log(res);
				this.sheet = res.result
			})
		}
	},
}
</script>

<style scoped>
#discover {
	height: 100vh;
}
</style>
