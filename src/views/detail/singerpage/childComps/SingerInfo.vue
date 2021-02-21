<template>
	<div class="singer-info" @click="infoClick">
		<span class="item-alias">点击滑动查看歌手简介</span>
		<scroll-y class="scroll-content" ref="bs">
			<span class="item-info">{{artist.briefDesc}}</span>
		</scroll-y>
	</div>
</template>

<script>
import ScrollY from 'components/common/scroll/ScrollY'

export default {
	name: 'SingerInfo',
	components: {
		ScrollY
	},
	props: {
		artist: {
			type: Object,
			default() {
				return null
			}
		}
	},
	created() {
		// this.$nextTick(() => {
		// 		this.$refs.bs.refresh()
		// })
	},
	methods: {
		infoClick() {
			console.log(this.artist);
			this.$refs.bs.refresh()
		},
	},
}
</script>

<style scoped>
.item-alias {
	display: block;
	width: 100%;
	height: 30px;
	line-height: 30px;
	font-size: 8px;
	text-align: right;
}

.item-info {
	display: block;
}

.scroll-content {
	width: 90%;
	margin-left: 5%;
	overflow: hidden;
	height: 50px;
}
</style>
