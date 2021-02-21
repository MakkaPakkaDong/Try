<template>
	<div id="singer">
		<sin-bar></sin-bar>
		<tab-control
      :titles="['男歌手', '女歌手', '乐队']"
      @tabClick="tabClick"
			ref="tabControl"
		/>
		<scroll-y class="scroll-content" ref="bs">
			<singers-list :singers="showSingers"></singers-list>
		</scroll-y>
	</div>
</template>

<script>
import SinBar from './childcomps/SinBar'
import TabControl  from './childcomps/TabControl'

import { getSinger } from 'network/singer'

import SingersList from 'components/content/singers/SingersList'
import ScrollY from 'components/common/scroll/ScrollY'

export default {
	name: 'Singer',
	components: {
		SinBar,
		TabControl,
		SingersList,
		ScrollY
	},
	data() {
		return {
			singers: {
				1: { offset: 0, list: []},
				2: { offset: 0, list: []},
				3: { offset: 0, list: []},
			},
			currentType: "1"
		}
	},
	computed: {
		showSingers() {
			return this.singers[this.currentType].list
		}
	},
	created() {
		this.getSingerMethods("1")
		this.getSingerMethods("2")
		this.getSingerMethods("3")

		this.$bus.$on('SingerimageLoad', () => {
			// console.log('监听到图片加载完成');
			this.$refs.bs.refresh()
		})
	},
	destroyed() {
		this.$bus.$off('SingerimageLoad')
	},
	methods: {
		tabClick(index) {
			switch (index) {
        case 0:
          this.currentType = "1";
          break;
        case 1:
          this.currentType = "2";
          break;
        case 2:
          this.currentType = "3";
          break;
			}
			this.$refs.tabControl.currentIndex = index;
		},
		// 获取网络数据
		getSingerMethods(type) {
			const offset = this.singers[type].offset + 1
			getSinger(offset, type).then((res) => {
				console.log(res.artists);
				this.singers[type].list.push(...res.artists);
				this.singers[type].offset += 1;
			})
		}
	},
}
</script>

<style scoped>
#singer {
	position: relative;
	height: 100vh;
}

.scroll-content {
	overflow: hidden;
	position: absolute;
	top: 84px;
	bottom: 49px;
	left: 0;
	right: 0;
}
</style>
