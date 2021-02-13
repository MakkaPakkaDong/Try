<template>
	<div class="horizontal-container">
		<div class="scroll-wrapper" ref="scroll">
			<div class="scroll-content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
	data() {
		return {
			scroll: null,
		}
	},
	mounted() {
		this.init()
		// console.log(this.bs);
		this.bs.refresh()
	},
	beforeDestroy() {
		this.bs.destroy()
	},
	methods: {
		init() {
			this.bs = new BScroll(this.$refs.scroll, {
				scrollX: true,
				probeType: 3
			})
			this.bs.on('scrollStart', () => {
				console.log('scrollStart-');
			})
			this.bs.on('scroll', ({ y }) => {
				console.log('scrolling-');
			})
			this.bs.on('scrollEnd', () => {
				console.log('scrollingEnd');
			})
		},
		refresh() {
			this.bs && this.bs.refresh()
		}
	},
}
</script>

<style scoped>
.horizontal-container {
	margin-top: 10px;
}

.scroll-wrapper {
	overflow: hidden;
	/* width: 90%; */
	/* border: 1px solid #42b983; */
	border-radius: 5px;
	/* margin: 80px auto; */
	white-space: nowrap;
}

.scroll-content{
	display: inline-block;
}

/* .scroll-item {
	display: inline-block;
	width: 100px;
	height: 20px;
	background-color: rgb(217, 255, 0);
	text-align: center;
	padding: 0 10px;
} */
</style>
