<template>
	<van-swipe class="my-swipe" 
		:autoplay="3000" 
		indicator-color="white"
	>
  	<van-swipe-item v-for="(item, index) in banners" :key="index">
			<img :src="item.imageUrl" alt="">
			<span class="title" :style="{backgroundColor: item.titleColor}">{{item.typeTitle}}</span>
		</van-swipe-item>
		
	</van-swipe>
</template>

<script>

export default {
	name: 'DisSwiper',
	props: {
		banners: {
			type: Array,
			default() {
				return null
			}
		}
	},
	components: {
		
	},

}
</script>

<style scoped>
.my-swipe {
	width: 90%;
	margin-left: 5%;
	background-color: rgb(255, 255, 255);
	margin-top: 8px;
	overflow: hidden;
	border-radius: 10px;
	/* position: relative;
	width: 90%;
	height: 16%;
	margin-top: 8px;
	margin-left: 5%; */
}

.my-swipe .van-swipe-item {
	position: relative;
  /* color: #fff;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
  background-color: #39a9ed; */
	width: 100%;
	height: 100%;
	border-radius: 10px;
}

.my-swipe .van-swipe-item img {
	width: 100%;
	height: 100%;
	border-radius: 10px;
	vertical-align: middle;
}

.my-swipe .van-swipe-item .title {
	position: absolute;
	bottom: 0;
	right: 0;
	display: block;
	height: 20px;
	line-height: 20px;
	padding-left: 5px;
	padding-right: 5px;
	font-size: 8px;
	font-weight: 700;
	color: linen;
	/* background-color: red; */
	border-top-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
</style>