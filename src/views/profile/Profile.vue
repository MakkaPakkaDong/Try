<template>
  <div id="profile">
		<nav-bar></nav-bar>
		<div class="top">
			<div class="portrait">
				<img src="~assets/img/common/touxiang.jpeg" alt="">
			</div>
		</div>
		<div class="middle">
			<div class="bar">
				播放列表
			</div>
		</div>
		<songs-list></songs-list>
  </div>
</template>

<script>
import ScrollY from 'components/common/scroll/ScrollY';
import NavBar from 'components/common/navbar/NavBar.vue';

import SongsList from './childComps/SongsList';

export default {
  name: "Profile",
	components: { 
		ScrollY,
		NavBar,
		SongsList
	},
};
</script>

<style scoped>
.top {
	margin-top: 30px;
	width: 100%;
}

.portrait {
	width: 60px;
	height: 60px;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 50%;
}

.portrait img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}

.middle {
	margin-top: 30px;
}

.bar {
	width: 80%;
	margin-left: 10%;
	line-height: 30px;
	font-size: 18px;
	font-weight: 700;
	color: black;
	text-align: left;
	border-bottom: 1px solid #e1e1e1;
	border-radius: 10px;
	text-indent: 4px;
}
</style>
