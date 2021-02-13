<template>
	<!-- <div class="dis-mlog scroll-item">
		<div class="item-1"><slot name="mlog-img"></slot></div>
		<div class="item-2"><slot name="mlog-text"></slot></div>
	</div> -->
	<div class="dis-mlog">
		<div class="scroll-item" v-for="(item, index) in mlog" :key="index">
			<img slot="mlog-img" :src="item.resource.mlogBaseData.coverUrl" alt="" @load="imageLoad">
			<div class="mlog-title" slot="mlog-text">{{item.resource.mlogBaseData.text}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DisMlog',
	props: {
		mlog: {
			type: Array,
			default() {
				return null
			}
		}
	},
	methods: {
		imageLoad() {
			console.log('图片加载完成');
			this.$bus.$emit('imageLoad')
		}
	},
}
</script>

<style scoped>
/* .dis-mlog {
	display: inline-block; 
	background-color: rgb(217, 255, 0);
 	width: 100%;
} */

.scroll-item {
	display: inline-block;
	/* background-color: rgb(217, 255, 0); */
	text-align: center;
	padding: 0;
	padding-right: 10px;
}

.dis-mlog img {
	width: 150px;
	height: 100px;
	vertical-align: middle;
	border-radius: 5px;
	text-align: left;
}

.item-2 {
	text-align: left;
	font-size: 12px;
	color: black;
	margin: 2px auto;
	/* width: 25%; */
}

.mlog-title {
	width: 150px;
	font-size: 12px;
	overflow:hidden; 
	text-overflow:ellipsis;
}
</style>
