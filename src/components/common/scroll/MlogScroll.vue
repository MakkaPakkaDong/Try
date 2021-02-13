<template>
	<div class="mlog">
		<div class="clear-fix">
			<span class="left">精选音乐视频</span>
			<span class="right">更多 ></span>
		</div>
		<slot name="mlog-item"></slot>
		<!-- <scroll-y>
			<dis-mlog>
				<img slot="mlog-img" src="~assets/img/tabbar/alien.svg" alt="">
				<div class="mlog-title" slot="mlog-text">哈哈哈hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
			</dis-mlog>
			<dis-mlog>
				<img slot="mlog-img" src="~assets/img/tabbar/alien.svg" alt="">
				<div class="mlog-title" slot="mlog-text">哈哈哈hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
			</dis-mlog>
			<dis-mlog>
				<img slot="mlog-img" src="~assets/img/tabbar/alien.svg" alt="">
				<div class="mlog-title" slot="mlog-text">哈哈哈qqqqqqqqqqqqqqqqqqqqqqqq</div>
			</dis-mlog>
			<dis-mlog>
				<img slot="mlog-img" src="~assets/img/tabbar/alien.svg" alt="">
				<div class="mlog-title" slot="mlog-text">哈哈哈aaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
			</dis-mlog>
			<dis-mlog>
				<img slot="mlog-img" src="~assets/img/tabbar/alien.svg" alt="">
				<div class="mlog-title" slot="mlog-text">哈哈哈xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
			</dis-mlog>
			<dis-mlog>
				<img slot="mlog-img" src="~assets/img/tabbar/alien.svg" alt="">
				<div class="mlog-title" slot="mlog-text">哈哈哈uuuuuuuuuuuuuuuuuuuuuuuuuuuuu</div>
			</dis-mlog>
			<dis-mlog>
				<img slot="mlog-img" src="~assets/img/tabbar/alien.svg" alt="">
				<div class="mlog-title" slot="mlog-text">哈哈哈wwwwwwwwwwwwwwwwwwwwwwwwww</div>
			</dis-mlog>
		</scroll-y> -->
		<!-- <scroll-y>
			<dis-mlog v-for="(item, index) in mlog" :key="index">
				<img slot="mlog-img" :src="item.resource.mlogBaseData.coverUrl" alt="" @load="imageLoad">
				<div class="mlog-title" slot="mlog-text">{{item.resource.mlogBaseData.text}}</div>
			</dis-mlog>
		</scroll-y> -->
	</div>
</template>

<script>
import DisMlog from 'views/discover/childcomps/DisMlog.vue'
import ScrollY from './ScrollY.vue'
export default {
  components: { ScrollY, DisMlog },
	name: 'MlogScroll',
	created() {
		
	},
	methods: {
		
	},
}
</script>

<style scoped>
.mlog {
	width: 90%;
	height: 200px;
	margin-left: 5%;
	margin-top: 15px;
}

.left {
	display: inline-block;
	font-size: 28px;
	font-weight: 700;
}

.right {
	display: inline-block;
	font-size: 12px;
	font-weight: 300;
	border:1px solid rgb(230, 230, 230);
	border-radius: 99em;
	padding: 3px 5px;
	margin-right: 3px;
	margin-top: 4px;
}

/* .mlog-title {
	width: 150px;
	overflow:hidden; 
	text-overflow:ellipsis;
} */
</style>
